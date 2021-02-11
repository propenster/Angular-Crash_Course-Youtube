import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { SingleEmployeeComponent } from './components/single-employee/single-employee.component';
import { EmployeeListComponent } from './mycomponents/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: EmployeeListComponent },
  { path: 'employees/add', component: AddEmployeeComponent },

  { path: 'employees/:id', component: SingleEmployeeComponent },
  { path: 'employees/:id/edit', component: EditEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
