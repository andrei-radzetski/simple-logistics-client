import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: 'app/shared/components/busy/',
  selector: 'sl-busy-content',
  templateUrl: './busy.content.html'
})
export class BusyContent {

  constructor(public activeModal: NgbActiveModal) {}
  
}