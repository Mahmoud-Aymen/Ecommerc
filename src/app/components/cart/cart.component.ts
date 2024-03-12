import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor( private _CartService:CartService ){}

  cartDetails:any = {}

  removeCartItem(id:string):void{
    this._CartService.removeItem(id).subscribe({
      next:(response)=>{
        this.cartDetails = response.data
        this._CartService.cartNumber.next(response.numCartItems)
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
      this._CartService.getUserCart().subscribe({
        next:(response)=>{
          this.cartDetails = response.data
        },
        error:(err)=>{
          console.log(err);
        }
      })
  }

  changeCount(id:string , countProduct:number):void{
    if( countProduct > 0 ){
      this._CartService.upadtaCart(id , countProduct).subscribe({
        next:(response)=>{
          this.cartDetails = response.data;
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
  }

  claer():void{
    this._CartService.clearCart().subscribe({
      next:(response)=>{
        this._CartService.cartNumber.next(response.numCartItems)
        if( response.message == "success" ){
          this.cartDetails = response
        }
      }
    })
  }

}
