import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Base_Url from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  //load all categories

  public getCategories(){
    return this._http.get(`${Base_Url}/category/`);
  }

  //add category
  public addCategory(category:any){
    return this._http.post(`${Base_Url}/category/`,category);
  }
}
