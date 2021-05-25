import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodManage } from 'src/app/model/food-manage.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodManageService {

  constructor(private http: HttpClient) { }

  // get FoodManages
  getFoodManages(): Observable<any> {
    return this.http.get(environment.apiUrl + '/food_manages');
  }

  // get FoodManage
  getFoodManage(id: number): Observable<any>  {
    return this.http.get(environment.apiUrl + '/food_manages/' + id);
  }

  // store FoodManage
  storeFoodManage(foodManage: FoodManage): Observable<any> {
    return this.http.post(environment.apiUrl + '/food_manages', foodManage);
  }

  //update FoodManage
  updateFoodManage(id: number, foodManage: FoodManage): Observable<any>  {
    return this.http.put(environment.apiUrl + '/food_manages/' + id, foodManage);
  }

  //delete FoodManage
  deleteFoodManage(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + '/food_manages/' + id);
  }
}
