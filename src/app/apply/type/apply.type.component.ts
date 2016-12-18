import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: 'app/apply/type/',
  selector: 'sl-apply-type',
  templateUrl: './apply.type.component.html'
})
export class ApplyTypeComponent implements OnInit {

  constructor(private router: Router) {}
  
  ngOnInit() {

  }

  next() {
    this.router.navigate(['/apply/attributes']);
  }

}