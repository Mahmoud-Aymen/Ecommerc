import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient , private _Router:Router ) { }

  setRegister( userData:object ):Observable<any>
  {
    return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signup` , userData )
  }

  setLogin( userData:any ):Observable<any>
  {
   return this._HttpClient.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin` , userData )
  }

  logOut():void{
    localStorage.removeItem('eToken')
    this._Router.navigate(["/login"]);
  }

}
