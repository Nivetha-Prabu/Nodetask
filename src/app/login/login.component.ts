import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { UsersService } from '../services/user.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor( private fb: FormBuilder, public userSer: UsersService, private customValidator: CustomvalidationService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])]
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.userSer.doUserLogin(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
      alert('success');
    }, (error: any) => {
      console.log(error);
      alert('invalid login');
    });
}
}
