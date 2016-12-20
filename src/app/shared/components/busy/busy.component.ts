import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BusyContent } from './busy.content';

@Component({
  moduleId: 'app/shared/components/busy/',
  selector: 'sl-busy',
  templateUrl: './busy.component.html'
})
export class BusyComponent {

  private modal: NgbModalRef;
  private _isOpen: boolean;
  public get isOpen(): boolean {
    return this._isOpen;
  }

  constructor(private modalService: NgbModal) {}

  open() {
    if(!this._isOpen) {
      this.modal = this.modalService.open(BusyContent, { backdrop: 'static', keyboard: false, size: 'sm' });
      this._isOpen = true;
    }
  }

  close() {
    if(this._isOpen) {
      this.modal.close();
      this._isOpen = false;
    }
  }

}