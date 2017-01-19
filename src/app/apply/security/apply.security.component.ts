import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from '../apply.service';

@Component({
  moduleId: 'app/apply/security/',
  selector: 'sl-apply-security',
  templateUrl: './apply.security.component.html'
})
export class ApplySecurityComponent {

  constructor(private router: Router, private applyService: ApplyService) {}

  next() {
    this.router.navigate(['/apply/extra']);
  }

}