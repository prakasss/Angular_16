import { Injectable } from '@angular/core';
import { addCategoryRequest } from '../models/Add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  addCategory(model:addCategoryRequest):Observable<void>{
    return this.http.post<void>('https://localhost:7079/api/categories',model);
  }
}
