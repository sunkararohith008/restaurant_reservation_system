import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

// export interface Subject {
//   name: string;
// }

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})

export class EditPaymentComponent implements OnInit {
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

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private paymentApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.paymentApi.GetPayment(id).subscribe(data => {
      console.log(data.subjects)
     // this.subjectArray = data.subjects;
      this.paymentForm = this.fb.group({
        payment_number: [data.payment_number, [Validators.required]],
        no_of_customers: [data.no_of_customers, [Validators.required]],
        name_of_cashier: [data.name_of_cashier, [Validators.required]],
        total_amount: [data.total_amount, [Validators.required]],
        //payment_email: [data.payment_email, [Validators.required]],
       // section: [data.section, [Validators.required]],
        //subjects: [data.subjects],
        //dob: [data.dob, [Validators.required]],
        mode_of_payment: [data.mode_of_payment, [Validators.required]]
        //gender: [data.gender]
      })      
    })    
  }

  /* Reactive book form */
  updateBookForm() {
    this.paymentForm = this.fb.group({
      payment_number: ['', [Validators.required]],
      no_of_customers: ['', [Validators.required]],
      name_of_cashier: ['', [Validators.required]],
      total_amount: ['', [Validators.required]],
      mode_of_payment: ['', [Validators.required]]

      // payment_email: ['', [Validators.required]],
      // section: ['', [Validators.required]],
      // subjects: [this.subjectArray],
      // dob: ['', [Validators.required]],
      // gender: ['Male']
    })
  }

  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    // if ((value || '').trim() && this.subjectArray.length < 5) {
    //   this.subjectArray.push({ name: value.trim() })
    // }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /* Remove dynamic languages */
  // remove(subject: Subject): void {
  //   const index = this.subjectArray.indexOf(subject);
  //   if (index >= 0) {
  //     this.subjectArray.splice(index, 1);
  //   }
  // }

  /* Date */
  formatDate(e: { target: { value: string | number | Date; }; }) {
    var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
    // this.paymentForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.paymentForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updatePaymentForm() {
    console.log(this.paymentForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.paymentApi.UpdatePayment(id, this.paymentForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/payments-list'))
      });
    }
  }
  
}