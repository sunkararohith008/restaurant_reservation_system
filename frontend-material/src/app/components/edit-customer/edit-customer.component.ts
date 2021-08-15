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
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})

export class EditCustomerComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetCustomerForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  customerForm!: FormGroup;
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
    private customerApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.customerApi.GetCustomer(id).subscribe(data => {
      console.log(data.subjects)
     // this.subjectArray = data.subjects;
      this.customerForm = this.fb.group({
        customer_fname: [data.customer_fname, [Validators.required]],
        customer_lname: [data.customer_lname, [Validators.required]],
        customer_gender: [data.customer_gender, [Validators.required]],
        customer_address: [data.customer_address, [Validators.required]],
        //customer_email: [data.customer_email, [Validators.required]],
       // section: [data.section, [Validators.required]],
        //subjects: [data.subjects],
        //dob: [data.dob, [Validators.required]],
        customer_phone: [data.customer_phone, [Validators.required]]
        //gender: [data.gender]
      })      
    })    
  }

  /* Reactive book form */
  updateBookForm() {
    this.customerForm = this.fb.group({
      customer_fname: ['', [Validators.required]],
      customer_lname: ['', [Validators.required]],
      customer_gender: ['', [Validators.required]],
      customer_address: ['', [Validators.required]],
      customer_phone: ['', [Validators.required]]

      // customer_email: ['', [Validators.required]],
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
    // this.customerForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.customerForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateCustomerForm() {
    console.log(this.customerForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.customerApi.UpdateCustomer(id, this.customerForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/customers-list'))
      });
    }
  }
  
}