import { Customer } from './../../shared/customer';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})

export class CustomersListComponent implements OnInit {
  CustomerData: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any = [];
  displayedColumns: string[] = ['_id', 'customer_fname', 'customer_lname', 'customer_gender' , 'customer_address' , 'customer_phone'];

  constructor(private customerApi: ApiService) {
    this.customerApi.GetCustomers().subscribe(data => {
      this.CustomerData = data;
      this.dataSource = new MatTableDataSource<Customer>(this.CustomerData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteCustomer(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.customerApi.DeleteCustomer(e._id).subscribe()
    }
  }

}