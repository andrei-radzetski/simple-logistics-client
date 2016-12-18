import { Component } from '@angular/core';

@Component({
  moduleId: 'app/apply/',
  selector: 'sl-apply',
  templateUrl: './apply.component.html'
})
export class ApplyComponent {

  gotoSave() {
    console.log('save');
  }

}