import { Reservation } from './../../shared/reservation';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-reservations-list',
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})

export class ReservationsListComponent implements OnInit {
  ReservationData: any = [];
  dataSource: any = [];
  @ViewChild(MatPaginator) paginator: any = [];
  displayedColumns: string[] = ['_id', 'customer_fullname', 'customer_address', 'reservation_event' , 'customer_phone' , 'No_of_persons', 'reservation_time'];

  constructor(private reservationApi: ApiService) {
    this.reservationApi.GetReservations().subscribe(data => {
      this.ReservationData = data;
      this.dataSource = new MatTableDataSource<Reservation>(this.ReservationData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deleteReservation(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.reservationApi.DeleteReservation(e._id).subscribe()
    }
  }

}