import { Component, OnInit, ViewChild } from '@angular/core';
import { RestResponseError } from '../shared/rest/rest.responseError';
import { RestResponseObject } from '../shared/rest/rest.responseObject';
import { Request } from '../shared/request/request';
import { BusyComponent } from '../shared/components/busy/busy.component';
import { ApplyService } from './apply.service';

@Component({
  moduleId: 'app/apply/',
  selector: 'sl-apply',
  templateUrl: './apply.component.html'
})
export class ApplyComponent implements OnInit {

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  constructor(private applyService: ApplyService) {}

  ngOnInit() {
    this.busyIndicator.open()
    this.applyService.initDictionares()
      .subscribe(
        (res: Boolean) => {},
        (err: RestResponseError) => this.onError(err),
        () => this.busyIndicator.close());
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }
 
  save() {
    let observable = this.applyService.commit();
    if(observable) {
      this.busyIndicator.open()
      observable.subscribe(
        (res: RestResponseObject<Request>) => this.busyIndicator.close(),
        (err: RestResponseError) => this.onError(err),
        () => this.busyIndicator.close());
    }
  }

}