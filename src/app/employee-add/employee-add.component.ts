import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  newEmployee: Employee = {
    EmployeeID: null,
    EmployeeNumber: '',
    FirstName: '',
    LastName: '',
    Birthday: '',
    Gender: '',
    Picture: ''
  };

  constructor(private router: Router) { }

  onSubmit(): void {
    // Implement validation and add logic
    console.log('New employee:', this.newEmployee);
    // After adding, navigate back to employee list
    this.router.navigate(['/employees']);
  }
}