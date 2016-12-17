import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/extra/',
  selector: 'sl-apply-extra',
  templateUrl: './apply.extra.component.html'
})
export class ApplyExtraComponent {
  
  constructor(private router: Router) {}

  gotoPrevious() {
    this.router.navigate(['/apply/security']);
  }

  save() {
    console.log('save');
  }

}