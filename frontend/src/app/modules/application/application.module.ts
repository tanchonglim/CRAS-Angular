import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminApplicationComponent } from './admin-application/admin-application.component';
import { AdminApplicationHistoryComponent } from './admin-application-history/admin-application-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminApplicationComponent,
    AdminApplicationHistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ApplicationModule { }