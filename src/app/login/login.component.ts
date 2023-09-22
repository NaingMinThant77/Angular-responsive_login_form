import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  genders = [ 'male', 'female'];

  constructor() {}

  ngOnInit(): void{

  }
  
  // validation
  loginForm = new FormGroup ({
    userdata: new FormGroup ({
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null , Validators.required),
    }),
    gender: new FormControl(''),
    hobby: new FormArray([])
  });

  login() {
    console.log('submitted');
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }

  addhobby() {
    const control = new FormControl( null, Validators.required);
    (<FormArray>this.loginForm.get('hobby')).push(control);
    }
  
    // getControls() {
    //   return (<FormArray>this.loginForm.get('hobby')).controls;
    // }

    // get controls() {
    //   return (this.loginForm.get('hobbies') as FormArray).controls;
    // }

}

