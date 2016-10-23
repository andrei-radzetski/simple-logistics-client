import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sl-filter',
    templateUrl: 'app/shared/filter/filter.component.html'
})
export class FilterComponent {

    @Input() public full: boolean = true;
    
}
