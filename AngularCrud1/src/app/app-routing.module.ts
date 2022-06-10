import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  {path: 'list', component: ListEmployeesComponent},
  {path: 'create', component: CreateEmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'travel', component: TravelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
