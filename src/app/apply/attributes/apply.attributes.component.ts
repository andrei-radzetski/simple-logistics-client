import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/attributes/',
  selector: 'sl-apply-attributes',
  templateUrl: './apply.attributes.component.html'
})
export class ApplyAttributesComponent {

  constructor(private router: Router) {}

  gotoPrevious() {
    this.router.navigate(['/apply/type']);
  }

  gotoNext() {
    this.router.navigate(['/apply/points']);
  }

}