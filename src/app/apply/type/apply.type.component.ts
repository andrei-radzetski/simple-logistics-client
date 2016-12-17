import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/type/',
  selector: 'sl-apply-type',
  templateUrl: './apply.type.component.html'
})
export class ApplyTypeComponent {

  constructor(private router: Router) {}

  gotoNext() {
    this.router.navigate(['/apply/attributes']);
  }

}