import { Component } from '@angular/core';


@Component({
    selector: 'sl-filter',
    templateUrl: 'app/shared/filter/filter.component.html'
})
export class FilterComponent {

    getContrastCssClass(): string {
        return 'sl-contrast'
    }
    
}
