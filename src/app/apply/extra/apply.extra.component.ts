import { Component } from '@angular/core';
import { ApplyService } from '../apply.service';

@Component({
  moduleId: 'app/apply/extra/',
  selector: 'sl-apply-extra',
  templateUrl: './apply.extra.component.html'
})
export class ApplyExtraComponent {

  constructor(private applyService: ApplyService) {}

}