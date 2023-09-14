import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  maritaloptions = ["single", "married", "widowed", "divorced", "separated"];

  Appointmentoptions = ["Fixed", "Pending"]

  isFixedAppointment(): boolean {
    const appointmentStatusControl = this.registerFrom.get('AppointmentStatus');
    
    if (appointmentStatusControl) {
      const appointmentStatusValue = appointmentStatusControl.value;
      return appointmentStatusValue === 'Fixed';
    }
    
    return false; 
  }
  constructor(private http: HttpClient, private router: Router) { }

  navigateToUserList() {
    this.router.navigate(['/user-list']);
  }

  registerFrom = new FormGroup({


    firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z' -]+$")]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern("^[A-Za-z' -]+$")]),
    City: new FormControl("", [Validators.required, Validators.minLength(3)]),
    Zip: new FormControl("", [Validators.required, Validators.maxLength(6)]),
    age: new FormControl("", [Validators.required]),
    MedicalHistory: new FormControl("", [Validators.required]),
    medication : new FormControl("" , [Validators.required]),
    medicationExplanation : new FormControl(""),
    MedicalHistoryExplanation: new FormControl(""),
    Maritalstatus: new FormControl("", [Validators.required]),
    AppointmentStatus: new FormControl("", [Validators.required]),
    Dob: new FormControl(""),
    Gender: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10}$")]),
    AllergicSalt: new FormControl(""),
    BloodGroup: new FormControl(""),
    Weight: new FormControl(""),
    AppointmentNumber: new FormControl("", [Validators.required]),

  })

  registerSubmit() {
    if (this.registerFrom.valid) {
      const data = this.registerFrom.value;
      console.log(data)
      const httpsend = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http.post('http://127.0.0.1:3000/users/create', data, httpsend)
        .subscribe(
          (response) => {
            console.log('Data sent to the backend', response);
            this.router.navigate(['/thank-you']);
          },
          (error) => {
            console.log('Something went wrong', error);
          }
        );
    } else {
      console.log('Form is not valid');
    }
  }

  get FirstName(): FormControl {

    return this.registerFrom.get("firstName") as FormControl;
  }

  get city(): FormControl {

    return this.registerFrom.get("City") as FormControl;
  }

  get maritalStatus(): FormControl {

    return this.registerFrom.get("Maritalstatus") as FormControl;

  }

  get Zip(): FormControl {

    return this.registerFrom.get("Zip") as FormControl;
  }

  get age(): FormControl {

    return this.registerFrom.get("age") as FormControl;
  }


  get AppointmentStatus(): FormControl {

    return this.registerFrom.get("AppointmentStatus") as FormControl;

  }


  get dob(): FormControl {

    return this.registerFrom.get("Dob") as FormControl;
  }

  get Gender(): FormControl {

    return this.registerFrom.get("Gender") as FormControl;
  }

  get MedicalHistory(): FormControl {

    return this.registerFrom.get("MedicalHistory") as FormControl;

  }

  get medication(): FormControl {

    return this.registerFrom.get("medication") as FormControl;

  }


  get mobile(): FormControl {

    return this.registerFrom.get("mobile") as FormControl;
  }

  get Lastname(): FormControl {

    return this.registerFrom.get("lastName") as FormControl;
  }

  get MedicalHistoryExplanation(): FormControl {
    return this.registerFrom.get("MedicalHistoryExplanation") as FormControl;

  }

  get medicationExplanation(): FormControl {
    return this.registerFrom.get("medicationExplanation") as FormControl;

  }

  

  get AllergicSalt(): FormControl {
    return this.registerFrom.get("AllergicSalt") as FormControl;
  }

  get BloodGroup(): FormControl {
    return this.registerFrom.get("BloodGroup") as FormControl;
  }

  get Weight(): FormControl {
    return this.registerFrom.get("Weight") as FormControl;
  }

  get AppointmentNumber(): FormControl {
    return this.registerFrom.get("AppointmentNumber") as FormControl;
  }
 
}
