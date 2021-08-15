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
  selector: 'app-add-cashier',
  templateUrl: './add-cashier.component.html',
  styleUrls: ['./add-cashier.component.css']
})

export class AddCashierComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetCashierForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  cashierForm!: FormGroup;
  // subjectArray: Subject[] = [];
  // SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private cashierApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.cashierForm = this.fb.group({
      cashier_fname: ['', [Validators.required]],
      cashier_lname: ['', [Validators.required]],
      cashier_email: ['', [Validators.required]],
      cashier_address: ['', [Validators.required]],
      cashier_phone: ['', [Validators.required]]
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
    // this.cashierForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.cashierForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitCashierForm() {
    if (this.cashierForm.valid) {
      this.cashierApi.AddCashier(this.cashierForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/cashiers-list'))
      });
    }
  }

}