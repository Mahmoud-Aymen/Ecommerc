import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msgError:string = "";
  isLoading:boolean = false;

  constructor( private _AuthService:AuthService , private _Router:Router , private _FormBuilder:FormBuilder ){}

  loginForm:FormGroup = this._FormBuilder.group({
    email:[null , [Validators.required , Validators.email]],
    password:[null , [Validators.required , Validators.pattern(/^[A-Z][a-z0-s9]{6,20}$/)]],
  })



  handleForm():void{
    console.log(this.loginForm.value);
    this.isLoading = true
   if( this.loginForm.valid ){
    this._AuthService.setLogin(this.loginForm.value).subscribe({
      next:(response)=>{
        if( response.message == "success" ){
          localStorage.setItem("eToken" , response.token)
          this._Router.navigate(["/home"])
          this.isLoading = false;
        }
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
        this.msgError = err.error.message;
        this.isLoading = false
      }
    })
   }
   else{
    this.loginForm.markAllAsTouched();
   }
  }

}
