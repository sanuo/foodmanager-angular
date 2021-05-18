import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  isSignedIn: boolean;
  UserProfile: User;

  constructor(
    private auth: AuthStateService,
    public authService: AuthService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });

    if(this.isSignedIn) {
      this.authService.profileUser().subscribe((data:any) => {
        this.UserProfile = data;
      })
    } else {
      this.router.navigate(['/']);
    }
  }

}