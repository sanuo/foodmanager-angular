import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/app/model/shopping-item.model';
import { ShoppingList } from 'src/app/model/shopping-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  // get ShoppingLists
  getShoppingLists(): Observable<any> {
    return this.http.get(environment.apiUrl + '/shopping_lists');
  }

  // get ShoppingList
  getShoppingList(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/shopping_lists/' + id);
  }

  // store ShoppingList
  storeShoppingList(shoppingList: ShoppingList): Observable<any> {
    return this.http.post(environment.apiUrl + '/shopping_lists', shoppingList);
  }

  //update ShoppingList
  updateShoppingList(id: number, shoppingList: ShoppingList): Observable<any>  {
    return this.http.put(environment.apiUrl + '/shopping_lists/' + id, shoppingList);
  }

  //delete ShoppingList
  deleteShoppingList(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + '/shopping_lists/' + id);
  }

  // get ShoppingItem
  getShoppingItem(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/shopping_list_items/' + id);
  }

  // store ShoppingItem
  storeShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.post(environment.apiUrl + '/shopping_list_items', shoppingItem);
  }

  //update ShoppingItem
  updateShoppingItem(id: number, shoppingItem: ShoppingItem): Observable<any>  {
    return this.http.put(environment.apiUrl + '/shopping_list_items/' + id, shoppingItem);
  }

  //delete ShoppingItem
  deleteShoppingItem(id: number): Observable<any>  {
    return this.http.delete(environment.apiUrl + '/shopping_list_items/' + id);
  }

  //delete ShoppingItem
  batchRegister(shoppingList: ShoppingList): Observable<any>  {
    return this.http.post(environment.apiUrl + '/shopping_lists/batch_register', shoppingList);
  }
}
