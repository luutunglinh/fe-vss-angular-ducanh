import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message = '';

  constructor(private http: HttpService, private fb: FormBuilder) { }
  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(32)
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(32),
        ],
      ],
    });
    console.log(this.loginForm);

  }

  login() {
    const formData = new FormData();
    formData.append("username", this.Username.value);
    formData.append("password", this.Password.value);
    this.http.login(formData);
  }

  get Username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
}
