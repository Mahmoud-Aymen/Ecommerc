import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor( private _HttpClient:HttpClient ) { }



  getAllProducts():Observable<any>
  {
   return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products`)
  }

  getProductDetails(id:string):Observable<any>
  {
   return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
  }

  getCategories():Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
  }

  getCategoryDetails(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/categories/${id}`)
  }

  getBrands():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands`)
  }

  getBrandsDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/brands/${id}`)
  }

}
