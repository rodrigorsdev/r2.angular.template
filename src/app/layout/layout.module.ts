import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        NavComponent,
        LoginInfoComponent,
        HomeComponent,
        NotFoundComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        NgbModule,
        RouterModule
    ],
    exports: [
        NavComponent,
        LoginInfoComponent,
        HomeComponent,
        NotFoundComponent,
        SidebarComponent
    ]
})
export class LayoutModule { }