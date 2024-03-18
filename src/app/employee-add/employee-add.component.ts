import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  newEmployee: any = {}; 

  onSubmit() {
    console.log('New employee:', this.newEmployee);
  }
}