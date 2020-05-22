import { Component } from "@angular/core";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['nav.component.css']
})
export class NavComponent {
    isCollapsed: boolean;

    isLogedIn: boolean = false;
    email: string = '';


    constructor() {
        this.isCollapsed = true;
    }

    login() {
        this.isLogedIn = true;
        this.email = 'user@email.com';
    }

    logout() {
        this.isLogedIn = false;
        this.email = '';
    }
}