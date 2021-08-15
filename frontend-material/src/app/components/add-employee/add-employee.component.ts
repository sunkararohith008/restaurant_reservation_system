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
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetEmployeeForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  employeeForm!: FormGroup;
  // subjectArray: Subject[] = [];
  // SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private employeeApi: ApiService
  ) {}

  ngOnInit() {
    this.submitBookFrom();
  }

  submitBookFrom() {
    this.employeeForm = this.fb.group({
      employee_fname: ['', [Validators.required]],
      employee_lname: ['', [Validators.required]],
      employee_position: ['', [Validators.required]],
      employee_address: ['', [Validators.required]],
      employee_salary: ['', [Validators.required]]
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
    // this.employeeForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  }

  /* Submit book */
  submitEmployeeForm() {
    if (this.employeeForm.valid) {
      this.employeeApi.AddEmployee(this.employeeForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
      });
    }
  }

}