import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // User registration
  register(user: User): Observable<any> {
    return this.http.post(environment.apiUrl + '/auth/register', user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(environment.apiUrl + '/auth/login', user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(environment.apiUrl + '/auth/user-profile');
  }
  
}
