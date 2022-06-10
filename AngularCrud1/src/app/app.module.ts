import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
/* import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';*/ /* võib lisada*/

const appRoutes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    /* BsDatepickerModule.forRoot(), */ /* võib lisada*/
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
