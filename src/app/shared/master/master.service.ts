import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';
import { Food } from 'src/app/model/food.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // get Categories
  getCategories(): Observable<any> {
    return this.http.get(environment.apiUrl + '/masters/category');
  }

  // store Category
  storeCategory(category: Category): Observable<any> {
    return this.http.post(environment.apiUrl + '/masters/category', category)
  }

  // get Category
  getCategory(id: number): Observable<any>  {
    return this.http.get(environment.apiUrl + '/masters/category/' + id)
  }

  // update Category
  updateCategory(id: number, category: Category): Observable<any>  {
    return this.http.put(environment.apiUrl + '/masters/category/' + id, category)
  }

  // delete Category
  deleteCategory(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + '/masters/category/' + id)
  }

  // get Foods
  getFoods(): Observable<any> {
    return this.http.get(environment.apiUrl + '/masters/food');
  }

  // get Foods By CategoryId
  getFoodsByCategoryId(category_master_id: number): Observable<any> {
    return this.http.post(environment.apiUrl + '/masters/food/fetch', category_master_id);
  }

  // store Category
  storeFood(food: Food): Observable<any> {
    return this.http.post(environment.apiUrl + '/masters/food', food)
  }

  // get Food
  getFood(id: number): Observable<any>  {
    return this.http.get(environment.apiUrl + '/masters/food/' + id)
  }

  //update Food
  updateFood(id: number, food: Food): Observable<any>  {
    return this.http.put(environment.apiUrl + '/masters/food/' + id, food)
  }

  //delete Food
  deleteFood(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + '/masters/food/' + id)
  }
}
