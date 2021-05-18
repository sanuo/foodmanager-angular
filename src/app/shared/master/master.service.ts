import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  // get Categories
  getCategories(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/masters/category');
  }

  // store Category
  storeCategory(category: Category): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/masters/category', category)
  }
}
