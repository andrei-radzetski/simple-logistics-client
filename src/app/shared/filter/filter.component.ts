import { Component, Input, OnInit } from '@angular/core';


@Component({
    moduleId: 'app/shared/filter/',
    selector: 'sl-filter',
    templateUrl: './filter.component.html'
})
export class FilterComponent {

    @Input() public full: boolean = true;
    
}
