import { Component, OnInit, ViewChild } from '@angular/core';
import { BusyComponent } from '../../shared/components/busy/busy.component';

@Component({
  moduleId: 'app/profile/histories/',
  selector: 'sl-profile-histories',
  templateUrl: './profile.histories.component.html'
})
export class ProfileHistoriesComponent implements OnInit {

  @ViewChild(BusyComponent)
  private busyIndicator: BusyComponent;

  ngOnInit() {

  }

}