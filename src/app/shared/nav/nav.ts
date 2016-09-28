export class Nav {

    public visible: boolean;

    constructor(public order: number, 
        public path: string, 
        public title: string, 
        public left: boolean,
        public urls: string[]) {

        this.visible = true;
    }

    /**
     * Check link url.
     */
    public isContainUrl(url: string): boolean {
        if(this.urls && this.urls.length > 0) {
            for(let temp of this.urls) {
                if(temp == url) {
                    return true;
                }
            }
        }
        return false;
    }
}