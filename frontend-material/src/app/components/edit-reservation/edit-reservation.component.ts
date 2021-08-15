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
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
  styleUrls: ['./edit-reservation.component.css']
})

export class EditReservationComponent implements OnInit {
  visible = true;
  selectable = true;
  selected: Boolean = false;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList: any;
  @ViewChild('resetReservationForm') myNgForm: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  reservationForm!: FormGroup;
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
    private reservationApi: ApiService
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.reservationApi.GetReservation(id).subscribe(data => {
      console.log(data.subjects)
     // this.subjectArray = data.subjects;
      this.reservationForm = this.fb.group({
        customer_fullname: [data.customer_fullnam, [Validators.required]],
        customer_address: [data.customer_address, [Validators.required]],
        reservation_event: [data.reservation_event, [Validators.required]],
        customer_phone: [data.customer_phone, [Validators.required]],
        //reservation_email: [data.reservation_email, [Validators.required]],
       // section: [data.section, [Validators.required]],
        //subjects: [data.subjects],
        //dob: [data.dob, [Validators.required]],
        No_of_persons: [data.No_of_persons, [Validators.required]],
        reservation_time: [data.reservation_time, [Validators.required]]
        //gender: [data.gender]
      })      
    })    
  }

  /* Reactive book form */
  updateBookForm() {
    this.reservationForm = this.fb.group({
      customer_fullname: ['', [Validators.required]],
      customer_address: ['', [Validators.required]],
      reservation_event: ['', [Validators.required]],
      customer_phone: ['', [Validators.required]],
      No_of_persons: ['', [Validators.required]],
      reservation_time: ['', [Validators.required]]

      // reservation_email: ['', [Validators.required]],
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
    // this.reservationForm.get('dob').setValue(convertDate, {
    //   onlyself: true
    // })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.reservationForm.controls[controlName].hasError(errorName);
  }

  /* Update book */
  updateReservationForm() {
    console.log(this.reservationForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.reservationApi.UpdateReservation(id, this.reservationForm.value).subscribe( res => {
        this.ngZone.run(() => this.router.navigateByUrl('/reservations-list'))
      });
    }
  }
  
}