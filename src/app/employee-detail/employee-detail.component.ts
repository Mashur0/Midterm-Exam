import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee: Employee;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employee = {
      EmployeeID: id,
      EmployeeNumber: 'EMP001',
      FirstName: 'John',
      LastName: 'Doe',
      Birthday: '1990-01-01',
      Gender: 'Male',
      Picture: 'https://example.com/john.jpg'
    };
  }

  editEmployee(): void {
    this.router.navigate(['/employees', this.employee.EmployeeID, 'edit']);
  }

  deleteEmployee(): void {
    console.log('Deleted employee:', this.employee);
  }
}