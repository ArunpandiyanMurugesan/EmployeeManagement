import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { EmployeeManagementSharedModule, UserRouteAccessService } from './shared';
import { EmployeeManagementAppRoutingModule} from './app-routing.module';
import { EmployeeManagementHomeModule } from './home/home.module';
import { EmployeeManagementAdminModule } from './admin/admin.module';
import { EmployeeManagementAccountModule } from './account/account.module';
import { EmployeeManagementEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        EmployeeManagementAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        EmployeeManagementSharedModule,
        EmployeeManagementHomeModule,
        EmployeeManagementAdminModule,
        EmployeeManagementAccountModule,
        EmployeeManagementEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class EmployeeManagementAppModule {}
