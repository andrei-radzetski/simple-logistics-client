export class Nav {

    public visible: boolean;

    constructor(public order: number, 
        public path: string, 
        public title: string, 
        public left: boolean,
        public urlExp: RegExp) {

        this.visible = true;
    }

    /**
     * Check link url.
     */
    public isContainUrl(url: string): boolean {
        return url && !!url.match(this.urlExp);
    }
}