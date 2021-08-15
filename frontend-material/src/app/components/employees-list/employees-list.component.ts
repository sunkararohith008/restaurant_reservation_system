import { Employee } from './../../shared/employee';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {
  EmployeeData: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any = [];
  displayedColumns: string[] = ['_id', 'employee_fname', 'employee_lname', 'employee_position' , 'employee_address' , 'employee_salary'];

  constructor(private employeeApi: ApiService) {
    this.employeeApi.GetEmployees().subscribe(data => {
      this.EmployeeData = data;
      this.dataSource = new MatTableDataSource<Employee>(this.EmployeeData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteEmployee(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.employeeApi.DeleteEmployee(e._id).subscribe()
    }
  }

}