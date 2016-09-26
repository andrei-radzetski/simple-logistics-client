import { Component, Input } from '@angular/core';


@Component({
    selector: 'sl-header',
    templateUrl: 'app/shared/header/header.component.html'
})
export class HeaderComponent {
    
    @Input() public title: string;
    @Input() public description: string;

    constructor() {}

    getContrastCssClass(): string {
        return 'sl-contrast'
    }
}
