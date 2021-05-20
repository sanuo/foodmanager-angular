import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodManageService {

  constructor(private http: HttpClient) { }

  // get FoodManages
  getFoodManages(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/food_manages/');
  }
}
