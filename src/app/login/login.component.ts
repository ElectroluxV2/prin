import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  @ViewChild('loginForm') loginForm!: NgForm;
  public loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginFormGroup = fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    })
  }


  getErrorMessage() {
    if (this.loginFormGroup.get('email')?.hasError('required')) {
      return 'You must enter a value';
    }

    return this.loginFormGroup.get('email')?.hasError('email') ? 'Not a valid email' : '';
  }

  public submit(): void {
    if (this.loginFormGroup.invalid) return;
    this.router.navigate(['/friends']).then();
  }


  ngOnInit(): void {
  }

}
