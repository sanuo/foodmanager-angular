import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from 'src/app/model/shopping-item.model';
import { ShoppingList } from 'src/app/model/shopping-list.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http: HttpClient) { }

  // get ShoppingLists
  getShoppingLists(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/shopping_lists/');
  }

  // get ShoppingList
  getShoppingList(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/shopping_lists/' + id);
  }

  // store ShoppingList
  storeShoppingList(shoppingList: ShoppingList): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/shopping_lists/', shoppingList);
  }

  //update ShoppingList
  updateShoppingList(id: number, shoppingList: ShoppingList): Observable<any>  {
    return this.http.put('http://127.0.0.1:8000/api/shopping_lists/' + id, shoppingList);
  }

  //delete ShoppingList
  deleteShoppingList(id: number): Observable<any>  {
    return this.http.delete('http://127.0.0.1:8000/api/shopping_lists/' + id);
  }

  // get ShoppingItem
  getShoppingItem(id: number): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/shopping_list_items/' + id);
  }

  // store ShoppingItem
  storeShoppingItem(shoppingItem: ShoppingItem): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/shopping_list_items/', shoppingItem);
  }

  //update ShoppingItem
  updateShoppingItem(id: number, shoppingItem: ShoppingItem): Observable<any>  {
    return this.http.put('http://127.0.0.1:8000/api/shopping_list_items/' + id, shoppingItem);
  }

  //delete ShoppingItem
  deleteShoppingItem(id: number): Observable<any>  {
    return this.http.delete('http://127.0.0.1:8000/api/shopping_list_items/' + id);
  }

  //delete ShoppingItem
  batchRegister(shoppingList: ShoppingList): Observable<any>  {
    return this.http.post('http://127.0.0.1:8000/api/shopping_lists/batch_register/', shoppingList);
  }
}
