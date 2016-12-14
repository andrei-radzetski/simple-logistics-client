import { Component, OnInit } from '@angular/core';

import { Nav } from './nav';
import { NavService } from './nav.service';


@Component({
  moduleId: 'app/shared/nav/',
  selector: 'sl-nav',
  templateUrl: './nav.component.html',
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
