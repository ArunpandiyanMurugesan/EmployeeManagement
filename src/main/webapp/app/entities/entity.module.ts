import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmployeeManagementRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { EmployeeManagementCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { EmployeeManagementLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { EmployeeManagementDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { EmployeeManagementTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { EmployeeManagementEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { EmployeeManagementJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { EmployeeManagementJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        EmployeeManagementRegionMySuffixModule,
        EmployeeManagementCountryMySuffixModule,
        EmployeeManagementLocationMySuffixModule,
        EmployeeManagementDepartmentMySuffixModule,
        EmployeeManagementTaskMySuffixModule,
        EmployeeManagementEmployeeMySuffixModule,
        EmployeeManagementJobMySuffixModule,
        EmployeeManagementJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeManagementEntityModule {}
