import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  editedEmployee: Employee;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.editedEmployee = {
      EmployeeID: id,
      EmployeeNumber: 'EMP001',
      FirstName: 'John',
      LastName: 'Doe',
      Birthday: '1990-01-01',
      Gender: 'Male',
      Picture: 'https://example.com/john.jpg'
    };
  }

  onSubmit(): void {
    console.log('Edited employee:', this.editedEmployee);
    this.router.navigate(['/employees', this.editedEmployee.EmployeeID]);
  }
}