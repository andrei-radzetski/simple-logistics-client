import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApplyService } from '../apply.service';

@Component({
  moduleId: 'app/apply/attributes/',
  selector: 'sl-apply-attributes',
  templateUrl: './apply.attributes.component.html'
})
export class ApplyAttributesComponent {

  constructor(private router: Router, private applyService: ApplyService) { }

  next() {
    this.router.navigate(['/apply/points']);
  }

  isCargo(): boolean {
    return this.applyService.isCargo();
  }

  placeUp() {
    if (!this.applyService.places) {
      this.applyService.places = 0;
    }
    this.applyService.places++;
  }

  placeDown() {
    if (this.applyService.places != null) {
      this.applyService.places--;
    }

    if (this.applyService.places == 0) {
      this.applyService.places = null;
    }
  }

}