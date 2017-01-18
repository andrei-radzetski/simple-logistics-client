import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GeoDialogContent } from './geo.dialog.content';
import { Point } from '../../point/point';

@Component({
  moduleId: 'app/shared/geo/dialog/',
  selector: 'sl-geo-dialog',
  templateUrl: './geo.dialog.component.html'
})
export class GeoDialogComponent {

  private modal: NgbModalRef;
  private _latitude: number;
  private _longitude: number;

  @Output() latitudeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() set latitude(value: number) {
    this._latitude = value;
  }

  @Output() longitudeChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() set longitude(value: number) {
    this._longitude = value;
  }

  constructor(private modalService: NgbModal) {}

  open(readOnly: boolean, centerLatitude?: number, centerLongitude?: number, points?: Point[]) {
    this.modal = this.modalService.open(GeoDialogContent, { backdrop: 'static', keyboard: true, size: 'lg' });
    this.modal.componentInstance.centerLatitude = centerLatitude || 53.42;
    this.modal.componentInstance.centerLongitude = centerLongitude || 23.43;
    this.modal.componentInstance.zoom = 8;
    this.modal.componentInstance.latitude = this._latitude;
    this.modal.componentInstance.longitude = this._longitude;
    this.modal.componentInstance.readOnly = readOnly;
    this.modal.componentInstance.points = points;

    this.modal.result.then((result: any) => {
      if(result) {
        this.latitudeChange.emit(result.latitude);
        this.longitudeChange.emit(result.longitude);
      }
    }, () => {});
  }

  close() {
    this.modal.close();
  }

}