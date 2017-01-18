import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MouseEvent } from 'angular2-google-maps/core';
import { Point } from '../../point/point';

@Component({
  moduleId: 'app/shared/geo/dialog/',
  selector: 'sl-geo-dialog-content',
  templateUrl: './geo.dialog.content.html'
})
export class GeoDialogContent {

  @Input() name: string;
  @Input() centerLatitude: number;
  @Input() centerLongitude: number;
  @Input() zoom: number;

  @Input() readOnly: boolean;
  @Input() points: Point[];

  @Input() latitude: number;
  @Input() longitude: number;

  constructor(public activeModal: NgbActiveModal) {}

  close(){
    if(!this.readOnly) {
      this.activeModal.close({
        latitude: this.latitude,
        longitude: this.longitude
      });
    } else {
      this.dismiss();
    }
  }

  getTitle() {
    return this.readOnly ? 'dialog.geo.title.points' : 'dialog.geo.title.pick';
  }

  dismiss(){
    this.activeModal.dismiss();
  }

  mapClicked(event:  MouseEvent) {
    if(!this.readOnly) {
      this.latitude = event.coords.lat;
      this.longitude = event.coords.lng;
    }
  }
}