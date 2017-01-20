import { Component, ViewChild, OnInit } from '@angular/core';
import { RequestService } from '../../shared/request/request.service';
import { Request } from '../../shared/request/request';
import { BusyComponent } from '../../shared/components/busy/busy.component';
import { RestResponseError } from '../../shared/rest/rest.responseError';
import { RestResponseArray } from '../../shared/rest/rest.responseArray';

@Component({
  moduleId: 'app/profile/requests/',
  selector: 'sl-profile-requests',
  templateUrl: './profile.requests.component.html'
})
export class ProfileRequestsComponent implements OnInit {

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;
  private items: Request[];

  constructor(private requestService: RequestService) {
    this.items = [];
  }

  ngOnInit() {
    this.busyIndicator.open();
    this.requestService.filter().subscribe((res: RestResponseArray<Request>) => {
        this.items = res.array;
        this.busyIndicator.close()
      },
      (err: RestResponseError) => this.onError(err),
      () => this.busyIndicator.close());
  }

  onError(err: RestResponseError) {
    console.log(err.message);
    this.busyIndicator.close();
  }

}