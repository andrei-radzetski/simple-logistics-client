import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from '../shared/request/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Request } from '../shared/request/request';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { BusyComponent } from '../shared/components/busy/busy.component';

@Component({
  moduleId: 'app/request/',
  selector: 'sl-request',
  templateUrl: './request.component.html'
})
export class RequestComponent implements OnInit {

  private request: Request;

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private requestService: RequestService) {
    this.request = new Request();
    this.request.points = [];
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.busyIndicator.open();
    let id = this.activatedRoute.snapshot.params['id'];
    this.requestService.get(id).subscribe(
      (res: RestResponseObject<Request>) => this.onRequest(res.object),
      (err: RestResponseError) => this.onError(err))
  }

  onRequest(res: Request) {
    this.request = res;
    this.busyIndicator.close();
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

  getCenterLat(): number {
    return this.request.points.length > 0 ? this.request.points[0].latitude : 53.42;
  }

  getCenterLong(): number {
    return this.request.points.length > 0 ? this.request.points[0].longitude : 23.43;
  }

  showComment(): boolean {
    return this.request && this.request.comment && this.request.comment.length > 0;
  }

  showCargo(): boolean {
    return this.request && this.request.service === 'freight';
  }

}