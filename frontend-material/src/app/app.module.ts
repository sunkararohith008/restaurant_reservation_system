//--Setting up Routes to navigate between components.
//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Angular 8 components */
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  /* import the AngularMaterialModule. */
import { AngularMaterialModule } from './material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* Angular 8 http service */
import { HttpClientModule } from '@angular/common/http';

/* Angular 8 CRUD services */
import { ApiService } from './shared/api.service';

/* Reactive form services in Angular 8 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { AddCashierComponent } from './components/add-cashier/add-cashier.component';
import { EditCashierComponent } from './components/edit-cashier/edit-cashier.component';
import { CashiersListComponent } from './components/cashiers-list/cashiers-list.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditPaymentComponent } from './components/edit-payment/edit-payment.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { PaymentsListComponent } from './components/payments-list/payments-list.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-customer' },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'customers-list', component: CustomersListComponent }
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
*/

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomersListComponent,
    AddReservationComponent,
    EditReservationComponent,
    ReservationsListComponent,
    AddCashierComponent,
    EditCashierComponent,
    CashiersListComponent,
    AddPaymentComponent,
    AddEmployeeComponent,
    EditPaymentComponent,
    EditEmployeeComponent,
    PaymentsListComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

//export class AppRoutingModule { }
export class AppModule { }