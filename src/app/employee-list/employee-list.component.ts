import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.employees = [

    ];
  }

  viewEmployeeDetail(employee: Employee): void {
    this.router.navigate(['/employees', employee.EmployeeID]);
  }
}