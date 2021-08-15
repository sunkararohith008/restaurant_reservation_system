import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-customer' },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'edit-customer/:id', component: EditCustomerComponent },
  { path: 'customers-list', component: CustomersListComponent },
  { path: 'add-reservation', component: AddReservationComponent },
  { path: 'edit-reservation/:id', component: EditReservationComponent },
  { path: 'reservations-list', component: ReservationsListComponent },
  { path: 'add-cashier', component: AddCashierComponent },
  { path: 'edit-cashier/:id', component: EditCashierComponent },
  { path: 'cashiers-list', component: CashiersListComponent },
  { path: 'add-payment', component: AddPaymentComponent },
  { path: 'edit-payment/:id', component: EditPaymentComponent },
  { path: 'payments-list', component: PaymentsListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent },
  { path: 'employees-list', component: EmployeesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }