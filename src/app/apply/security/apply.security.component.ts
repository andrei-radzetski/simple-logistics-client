import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/security/',
  selector: 'sl-apply-security',
  templateUrl: './apply.security.component.html'
})
export class ApplySecurityComponent {

  constructor(private router: Router) {}

  next() {
    this.router.navigate(['/apply/extra']);
  }

}