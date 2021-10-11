import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-details/employee-list/employee-list.component';
import { EmployeeTitlePipePipe } from './employee-details/employee-list/employee-title-pipe.pipe';
import { EmployeeCountComponent } from './employee-details/employee-list/employee-count/employee-count.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeTitlePipePipe,
    EmployeeCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
