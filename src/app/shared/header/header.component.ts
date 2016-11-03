import { Component, Input } from '@angular/core';


@Component({
    moduleId: 'app/shared/header/',
    selector: 'sl-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    
    @Input() public title: string;
    @Input() public description: string;

    constructor() {}
}
