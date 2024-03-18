import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  editedEmployee: any = {}; 

  onSubmit() {
    console.log('Edited employee:', this.editedEmployee);
  }
}