import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Reservation } from './reservation';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add customer
  AddCustomer(data: Customer): Observable<any> {
    let API_URL = `${this.endpoint}/add-customer`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Add reservation
  AddReservation(data: Reservation): Observable<any> {
    let API_URL = `${this.endpoint}/add-reservation`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Add Cashier
  AddCashier(data: Reservation): Observable<any> {
    let API_URL = `${this.endpoint}/add-cashier`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Add Payment
  AddPayment(data: Reservation): Observable<any> {
    let API_URL = `${this.endpoint}/add-payment`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Add Employee
  AddEmployee(data: Reservation): Observable<any> {
    let API_URL = `${this.endpoint}/add-employee`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Get all customers
  GetCustomers() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all reservationss
  GetReservations() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all cashiers
  GetCashiers() {
    return this.http.get(`${this.endpoint}`);
  }

  //Get all payments
  GetPayments() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all employee
  GetEmployees() {
    return this.http.get(`${this.endpoint}`);
  }

  // // Get customer
  // GetCustomer(id: any): Observable<any> {
  //   let API_URL = `${this.endpoint}/read-customer/${id}`;
  //   return this.http.get(API_URL, { headers: this.headers })
  //     .pipe(
  //       map((res: Response) => {
  //         return res ? res : {}
  //       }),
  //       catchError(this.errorMgmt)
  //     )
  // }


  //  // Get customer
  GetCustomer(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-customer/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => { 
          return res || {} 
        }),
        catchError(this.errorMgmt)
      )
  }

  //  // Get reservation
  GetReservation(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-reservation/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => { 
          return res || {} 
        }),
        catchError(this.errorMgmt)
      )
  }

  // Get Cashier
  GetCashier(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-cashier/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => { 
          return res || {} 
        }),
        catchError(this.errorMgmt)
      )
  }

  // Get Payment
  GetPayment(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-payment/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => { 
          return res || {} 
        }),
        catchError(this.errorMgmt)
      )
  }

  // Get Employee
  GetEmployee(id: any): Observable<any> {
    let API_URL = `${this.endpoint}/read-employee/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map(res => { 
          return res || {} 
        }),
        catchError(this.errorMgmt)
      )
  }
 
  // Update customer
  UpdateCustomer(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-customer/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update reservation
  UpdateReservation(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-reservation/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Update Cashier
  UpdateCashier(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-cashier/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Update Payment
  UpdatePayment(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-payment/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Update Employee
  UpdateEmployee(id: any, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/update-employee/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // Delete customer
  DeleteCustomer(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-customer/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete reservation
  DeleteReservation(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-reservation/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  //Delete Cashier
  DeleteCashier(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-cashier/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete Payment
  DeletePayment(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-payment/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete Employee
  DeleteEmployee(id: any): Observable<any> {
    var API_URL = `${this.endpoint}/delete-employee/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}