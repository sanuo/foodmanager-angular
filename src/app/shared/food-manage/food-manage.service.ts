import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodManage } from 'src/app/model/food-manage.model';

@Injectable({
  providedIn: 'root'
})
export class FoodManageService {

  constructor(private http: HttpClient) { }

  // get FoodManages
  getFoodManages(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/food_manages/');
  }

  // get FoodManage
  getFoodManage(id: number): Observable<any>  {
    return this.http.get('http://127.0.0.1:8000/api/food_manages/' + id);
  }

  // store FoodManage
  storeFoodManage(foodManage: FoodManage): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/food_manages/', foodManage)
  }
}
