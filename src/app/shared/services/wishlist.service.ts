import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {



  constructor(private _HttpClient:HttpClient) { }

  addToWhishList(productId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/wishlist`,
    {
      productId: productId
    }
    )
  }

  getWhishList():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/wishlist`)
  }

  removeWhishList(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/wishlist/${productId}`)
  }
  
}
