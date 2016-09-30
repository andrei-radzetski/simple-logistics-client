import { Component, OnInit } from '@angular/core';

import { Nav } from './nav';
import { NavService } from './nav.service';


@Component({
    selector: 'sl-nav',
    templateUrl: 'app/shared/nav/nav.component.html',
    providers: [
        NavService
    ]
})
export class NavComponent implements OnInit {

    private navService: NavService;
    private links: Nav[];

    constructor(navService: NavService) {
        this.navService = navService;
    }

    private isLinkActive(link: Nav) {
        return this.navService.isActiveLink(link);
    }

    ngOnInit() {
        this.links = this.navService.getLinks();
    }
}
