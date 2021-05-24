import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post('https://foodmanager-backend.herokuapp.com/api/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('https://foodmanager-backend.herokuapp.com/api/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get('https://foodmanager-backend.herokuapp.com/api/auth/user-profile');
  }
  
}
