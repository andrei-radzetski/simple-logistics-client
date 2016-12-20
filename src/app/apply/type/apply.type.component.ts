import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from '../apply.service';

@Component({
  moduleId: 'app/apply/type/',
  selector: 'sl-apply-type',
  templateUrl: './apply.type.component.html'
})
export class ApplyTypeComponent {
  
  constructor(private router: Router, private applyService: ApplyService) {}

  next() {
    this.router.navigate(['/apply/attributes']);
  }

}