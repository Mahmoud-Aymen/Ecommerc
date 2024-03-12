import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent implements OnInit {
  constructor(private _FormBuilder:FormBuilder , private _ActivatedRoute:ActivatedRoute , private _CartService:CartService  ){}

  chekout:FormGroup = this._FormBuilder.group({
    details:[""],
    phone:[""],
    city:[""],
  })

  cartId:any = "";

  handelForm():void{
    console.log(this.chekout.value);
    this._CartService.checkOut(this.cartId , this.chekout.value ).subscribe({
      next:(response)=>{
        if(response.status == "success"){
          window.open( response.session.url , "_self" )
        }
      }
    })
  }

  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:(params)=>{
          this.cartId = params.get("id")
        }
      })
  }

}