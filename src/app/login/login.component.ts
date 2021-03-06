import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService } from '../shared/auth.service';
import { TokenService } from '../shared/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: {
    email: string,
    password: string,
    error: string
  }

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      result => {
        this.responseHandler(result);
      },
      error => {
        this.errors = error.error;
        console.dir(this.errors);
      },() => {
        this.authState.setAuthState(true);
        this.loginForm.reset()
        this.router.navigate(['/']);
      }
    );
  }

  // Handle response
  responseHandler(data){
    this.token.handleData(data.access_token);
  }

}
