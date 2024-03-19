import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: 'employees/:id/edit', component: EmployeeEditComponent },
  { path: 'add', component: EmployeeAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
