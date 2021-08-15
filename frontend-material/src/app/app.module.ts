import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { AddReservationComponent } from './components/add-reservation/add-reservation.component';
import { EditReservationComponent } from './components/edit-reservation/edit-reservation.component';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { AddCashierComponent } from './components/add-cashier/add-cashier.component';
import { EditCashierComponent } from './components/edit-cashier/edit-cashier.component';
import { CashiersListComponent } from './components/cashiers-list/cashiers-list.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { EditPaymentComponent } from './components/edit-payment/edit-payment.component';
import { PaymentsListComponent } from './components/payments-list/payments-list.component';

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
    EditPaymentComponent,
    PaymentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
