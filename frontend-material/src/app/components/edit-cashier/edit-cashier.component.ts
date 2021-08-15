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
  selector: 'app-edit-cashier',
  templateUrl: './edit-cashier.component.html',
  styleUrls: ['./edit-cashier.component.css']
})

export class EditCashierComponent implements OnInit {
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

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private cashierApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.cashierApi.GetCashier(id).subscribe(data => {
      console.log(data.subjects)
     // this.subjectArray = data.subjects;
      this.cashierForm = this.fb.group({
        cashier_fname: [data.cashier_fname, [Validators.required]],
        cashier_lname: [data.cashier_lname, [Validators.required]],
        cashier_email: [data.cashier_email, [Validators.required]],
        cashier_address: [data.cashier_address, [Validators.required]],
        //cashier_email: [data.cashier_email, [Validators.required]],
       // section: [data.section, [Validators.required]],
        //subjects: [data.subjects],
        //dob: [data.dob, [Validators.required]],
        cashier_phone: [data.cashier_phone, [Validators.required]]
        //gender: [data.gender]
      })      
    })    
  }

  /* Reactive book form */
  updateBookForm() {
    this.cashierForm = this.fb.group({
      cashier_fname: ['', [Validators.required]],
      cashier_lname: ['', [Validators.required]],
      cashier_email: ['', [Validators.required]],
      cashier_address: ['', [Validators.required]],
      cashier_phone: ['', [Validators.required]]

      // cashier_email: ['', [Validators.required]],
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
    // this.cashierForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.cashierForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateCashierForm() {
    console.log(this.cashierForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.cashierApi.UpdateCashier(id, this.cashierForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/cashiers-list'))
      });
    }
  }
  
}