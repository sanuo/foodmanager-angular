import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  // get FoodManages
  getShoppingLists(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/shopping_lists/');
  }
}
