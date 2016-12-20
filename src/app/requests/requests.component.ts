import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/requests/',
  selector: 'sl-requests',
  templateUrl: './requests.component.html'
})
export class RequestsComponent {

  items: number[] = [1,2,3,4,5,6,7,1,2,3,4,5,6,7];

  constructor(private router: Router) {}

  gotoApply() {
    this.router.navigate(['/apply']);
  }

  find() {
    console.log('find');
  }

}