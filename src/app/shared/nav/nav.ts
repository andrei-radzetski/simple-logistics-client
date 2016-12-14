import { NavElementState } from './nav.elemetnState';

export class Nav {

  public state: NavElementState;
  public order: number;
  public path: string;
  public title: string;
  public left: boolean;
  public urlExp: RegExp;
  public visible: boolean;

  constructor(order: number, path: string, title: string, left: boolean, urlExp: RegExp, state: NavElementState) {
    this.order = order;
    this.path = path;
    this.title = title;
    this.left = left;
    this.urlExp = urlExp;
    this.state = state;
    this.visible = true;
  }

  /**
   * Check link url.
   */
  public isContainUrl(url: string): boolean {
    return url && !!url.match(this.urlExp);
  }
}