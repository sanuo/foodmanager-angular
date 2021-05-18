import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { AuthStateService } from '../shared/auth-state.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  isSignedIn: boolean;
  UserProfile: User;

  constructor(
    private auth: AuthStateService,
    private authService: AuthService
  ) {
    this.authService.profileUser().subscribe((data:any) => {
      this.UserProfile = data;
    })
  }

  ngOnInit(): void {
    this.auth.userAuthState.subscribe(val => {
      this.isSignedIn = val;
    });
  }

}
