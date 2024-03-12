import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private _HttpClient:HttpClient ) { }


  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  



  addToCart(productId:string):Observable<any>{
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/cart` , {
      "productId": productId}
      )
  }

  getUserCart():Observable<any>{
    return this._HttpClient.get(`https://route-ecommerce.onrender.com/api/v1/cart`)
  }

  removeItem(productId:string):Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart/${productId}`)
  }

  upadtaCart(productId:string , count:number):Observable<any>{
    return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}` ,
    {"count": count }
    )
  }

  checkOut(cartId:string , userData:object ):Observable<any>{
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://https://mohamed-samy2255.github.io/Angular-task2/` , {
      shippingAddress: userData,
    })
  }

  clearCart():Observable<any>{
    return this._HttpClient.delete(`https://route-ecommerce.onrender.com/api/v1/cart`)
  }

}
