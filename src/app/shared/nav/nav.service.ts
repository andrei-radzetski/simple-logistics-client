import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';

import { LINKS } from './nav.mock';
import { Nav } from './nav';

@Injectable()
export class NavService {

    private active: Nav;
    private links: Nav[];

    constructor(private router: Router) {
        this.links = LINKS;
        this.registerRouterSubscriber();
    }

    /**
     * Check if link is active. 
     */
    public isActive(link: string) {
        return link && this.active && link == this.active.path;
    }

    /**
     * See { NavService.isActive }.
     */
    public isActiveLink(link: Nav) {
        return this.isActive(link ? link.path : null);
    }

    /**
     * Get list of available links. 
     */
    public getLinks(): Nav[] {
        return this.links;
    }

    /**
     * Register router subscriber, detect route changing.
     */
    private registerRouterSubscriber() {
        let _this = this; 
        this.router.events.subscribe(function(event: Event) {
            if(event instanceof NavigationStart) {
                _this.setActive(_this.findLink(event.url));
            }
        });
    }

    /**
     * Find link in the links list by url.
     */
    private findLink(url: string): Nav {
        for(let link of this.links) {
            if(link.isContainUrl(url)) {
                return link;
            }
        }
        return null;
    }

    /**
     * Set active link.
     */
    private setActive(link: Nav) {
        this.active = link;
    }
}