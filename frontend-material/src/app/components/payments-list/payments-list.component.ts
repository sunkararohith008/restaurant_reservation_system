import { Payment } from './../../shared/payment';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.css']
})

export class PaymentsListComponent implements OnInit {
  PaymentData: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any = [];
  displayedColumns: string[] = ['_id', 'payment_number', 'no_of_payments', 'name_of_cashier' , 'total_amount' , 'mode_of_payment'];

  constructor(private paymentApi: ApiService) {
    this.paymentApi.GetPayments().subscribe(data => {
      this.PaymentData = data;
      this.dataSource = new MatTableDataSource<Payment>(this.PaymentData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deletePayment(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.paymentApi.DeletePayment(e._id).subscribe()
    }
  }

}