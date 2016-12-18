import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/points/',
  selector: 'sl-apply-',
  templateUrl: './apply.points.component.html'
})
export class ApplyPointsComponent {

  items: number[] = [1,2,3,4,5,6,7];

  constructor(private router: Router) {}

  addPoint() {
    console.log('add point');
  }

  next() {
    this.router.navigate(['/apply/security']);
  }

}