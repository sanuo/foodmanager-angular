import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthStateService } from '../shared/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isSignedIn: boolean;

  constructor(
    private router: Router,
    private auth: AuthStateService, 
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
      });
      if(!this.isSignedIn) {
        this.router.navigate([ '/login' ]);
      }
      return this.isSignedIn;
  }
  
}
