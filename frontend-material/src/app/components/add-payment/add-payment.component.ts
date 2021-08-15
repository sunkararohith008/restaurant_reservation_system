import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})

export class AddPaymentComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetPaymentForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  paymentForm!: FormGroup;
  // subjectArray: Subject[] = [];
  // SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private paymentApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.paymentForm = this.fb.group({
      payment_number: ['', [Validators.required]],
      no_of_customers: ['', [Validators.required]],
      name_of_cashier: ['', [Validators.required]],
      total_amount: ['', [Validators.required]],
      mode_of_payment: ['', [Validators.required]]
    })
  }
  

  /* Add dynamic languages */
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;
  //   // Add language
  //   if ((value || '').trim() && this.subjectArray.length < 5) {
  //     this.subjectArray.push({ name: value.trim() })
  //   }
  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  /* Remove dynamic languages */
  // remove(subject: Subject): void {
  //   const index = this.subjectArray.indexOf(subject);
  //   if (index >= 0) {
  //     this.subjectArray.splice(index, 1);
  //   }
  // }

  /* Date */
  formatDate(e: any) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    // this.paymentForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.paymentForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitPaymentForm() {
    if (this.paymentForm.valid) {
      this.paymentApi.AddPayment(this.paymentForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/payments-list'))
      });
    }
  }

}