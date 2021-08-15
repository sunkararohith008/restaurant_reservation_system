import { Cashier } from './../../shared/cashier';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cashiers-list',
  templateUrl: './cashiers-list.component.html',
  styleUrls: ['./cashiers-list.component.css']
})

export class CashiersListComponent implements OnInit {
  CashierData: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any = [];
  displayedColumns: string[] = ['_id', 'cashier_fname', 'cashier_lname', 'cashier_email' , 'cashier_address' , 'cashier_phone'];

  constructor(private cashierApi: ApiService) {
    this.cashierApi.GetCashiers().subscribe(data => {
      this.CashierData = data;
      this.dataSource = new MatTableDataSource<Cashier>(this.CashierData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteCashier(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.cashierApi.DeleteCashier(e._id).subscribe()
    }
  }

}