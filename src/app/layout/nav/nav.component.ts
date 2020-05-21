import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html'
})
export class NavComponent {
    public isCollapsed: boolean;

    constructor() {
        this.isCollapsed = true;
    }
}