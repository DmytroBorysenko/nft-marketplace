import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    login: new FormControl(null, Validators.required),
    pass: new FormControl(null, Validators.required),
  });
  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log('Login form Valid');
  }
}
