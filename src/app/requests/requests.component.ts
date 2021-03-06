import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Dictionary } from '../shared/dictionary/dictionary';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseArray } from '../shared/rest/rest.responseArray';
import { Observable } from 'rxjs/Observable';
import { DictionaryService } from '../shared/dictionary/dictionary.service';
import { BusyComponent } from '../shared/components/busy/busy.component';
import { RequestService } from '../shared/request/request.service';
import { Request } from '../shared/request/request';
import { URLSearchParams } from '@angular/http';

@Component({
  moduleId: 'app/requests/',
  selector: 'sl-requests',
  templateUrl: './requests.component.html'
})
export class RequestsComponent implements OnInit {

  private items: Request[];

  kinds: Dictionary[];
  services: Dictionary[];
  transports: Dictionary[];

  kind: Dictionary;
  service: Dictionary;
  transport: Dictionary;

  private departure: string;
  private departureDate: NgbDateStruct;
  private destination: string;
  private destinationDate: NgbDateStruct;
  private places: number;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  
  private sortField: string = 'creationDate';
  private sortType: string = 'desc';

  private limit: number = 10;
  private skip: number = 0;
  private count: number = 0;
  private page: number = 1;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formatter: NgbDateParserFormatter,
    private dictionaryService: DictionaryService, 
    private requestService: RequestService) {
    this.kinds = new Array<Dictionary>();
    this.services = new Array<Dictionary>();
    this.transports = new Array<Dictionary>();
    this.items = new Array<Request>();
  }

  ngOnInit() {
    this.busyIndicator.open();
    this.dictionaryService.getRequestKinds()
      .flatMap((res: RestResponseArray<Dictionary>) => {
        this.kinds = res.array;
        return this.dictionaryService.getRequestServices();
      })
      .flatMap((res: RestResponseArray<Dictionary>) => {
        this.services = res.array;
        return this.dictionaryService.getTrasports();
      })
      .flatMap((res: RestResponseArray<Dictionary>) => {
        this.transports = res.array;
        return this.activatedRoute.queryParams;
      }).flatMap(params => {
        this.departure = params['departure'] || null;
        this.departureDate = this.formatter.parse(params['departureDate']);
        this.destination = params['destination'] || null;
        this.destinationDate = this.formatter.parse(params['destinationDate']);
        this.places = params['places'];
        this.page = params['page'] || 1;
        this.calcPage();
        return this.requestService.filter(this.createQueryParams());
      }).subscribe((res: RestResponseArray<Request>) => {
        this.items = res.array;
        this.count = res.count;
        this.busyIndicator.close();
      },
      (err: RestResponseError) => this.onError(err),
      () => this.busyIndicator.close());
  }

  private createQueryParams(): URLSearchParams {
      let params = new URLSearchParams();
      if(this.departure) params.set('departure', this.departure);
      if(this.departureDate) params.set('departureDate', this.formatDate(this.departureDate));
      if(this.destination) params.set('destination', this.destination);
      if(this.destinationDate) params.set('destinationDate', this.formatDate(this.destinationDate));
      if(this.places != null) params.set('places', this.places.toString());
      if(this.kind) params.set('kind', this.kind.key.toString());
      if(this.service) params.set('service', this.service.key.toString());
      if(this.transport) params.set('transport', this.transport.key.toString());
      if(this.limit != null) params.set('limit', this.limit.toString());
      if(this.skip != null) params.set('skip', this.skip.toString());
      if(this.sortField) params.set('sortField', this.sortField.toString());
      if(this.sortType) params.set('sortType', this.sortType.toString());
      return params
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

  onKindChanged(value: Dictionary) {
    this.kind = value;
  }

  onServiceChanged(value: Dictionary) {
    this.service = value;
  }

  onTransportChanged(value: Dictionary) {
    this.transport = value;
  }

  gotoApply() {
    this.router.navigate(['/apply']);
  }

  search() {
    this.router.navigate(['/requests'], this.createSearchParams());
  }

  placeUp() {
    if (!this.places) {
      this.places = 0;
    }
    this.places++;
  }

  placeDown() {
    if (this.places != null) {
      this.places--;
    }

    if (this.places == 0) {
      this.places = null;
    }
  }

  private formatDate(date: NgbDateStruct) {
    return date ? this.formatter.format(date) : null;
  }

  private createSearchParams(): NavigationExtras {
    return {
      queryParams: {
        kind: this.kind ? this.kind.key : undefined,
        service: this.service ? this.service.key : undefined,
        departure: this.departure,
        departureDate: this.formatDate(this.departureDate),
        destination: this.destination,
        destinationDate: this.formatDate(this.destinationDate),
        places: this.places,
        transport: this.transport ? this.transport.key : undefined,
        page: this.page
      }
    }
  }

  private pageChange() {
    this.calcPage();
    this.search();
  }

  private calcPage() {
    this.skip = (this.page - 1) * this.limit;
  }

}