import { ToastrService } from 'ngx-toastr';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  constructor( private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService , 
    private _CartService:CartService ,
    private _ToastrService:ToastrService ){}


  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
  items: 1,
    nav: true,
    autoplay:true
  }

  addCart(id:string):void{
    this._CartService.addToCart(id).subscribe({
      next:(response)=>{
        this._ToastrService.success(response.message , "Fresh Cart") 
        this._CartService.cartNumber.next(response.numOfCartItems)        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }


  productDetails:Product = {} as Product ;
  ngOnInit(): void {
      this._ActivatedRoute.paramMap.subscribe({
        next:( params )=>{
          let idProduct:any = params.get('id')
          this._EcomdataService.getProductDetails(idProduct).subscribe({
            next:(response)=>{
              this.productDetails = response.data;
            }
          })
        }
      })
  }

}
