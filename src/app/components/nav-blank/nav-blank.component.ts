import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent implements OnInit {

  
  constructor( private _AuthService:AuthService ,
    private _Renderer2:Renderer2,
    private _CartService:CartService
    ){}

    cartCount:number = 0;

    ngOnInit(): void {
      this._CartService.cartNumber.subscribe({
        next:(data)=>{
          this.cartCount = data
        }
      })

      this._CartService.getUserCart().subscribe({
        next:(response)=>{
          this._CartService.cartNumber.next(response.numOfCartItems)
        }
      })

    }

  @ViewChild("navBar") navElement!:ElementRef
  
  @HostListener("window:scroll") 
  onScroll():void{
    // console.log("mohamed");
    if(scrollY > 500){
      this._Renderer2.addClass(this.navElement.nativeElement , "px-5")
    }
    else{
      this._Renderer2.removeClass(this.navElement.nativeElement , "px-5")
    }
  }

  logOutUser():void{
    this._AuthService.logOut();
  }
  
}
