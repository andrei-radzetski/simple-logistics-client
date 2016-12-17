import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/points/',
  selector: 'sl-apply-',
  templateUrl: './apply.points.component.html'
})
export class ApplyPointsComponent {

  constructor(private router: Router) {}

  gotoPrevious() {
    this.router.navigate(['/apply/attributes']);
  }

  gotoNext() {
    this.router.navigate(['/apply/security']);
  }

}