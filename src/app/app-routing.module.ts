import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategriesComponent } from './components/categries/categries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WhislistComponent } from './components/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';

const routes: Routes = [
  { path: "" , canActivate: [authGuard] , component:BlankLayoutComponent , children: [
    { path: "" , redirectTo: "home" , pathMatch: "full" },
    { path: "home" , component:HomeComponent },
    { path: "cart" , component:CartComponent },
    { path: "products" , component:ProductsComponent },
    { path: "whislist" , component:WhislistComponent },
    { path: "allorders" , component:AllordersComponent },
    { path: "chekout/:id" , component:ChekoutComponent },
    { path: "details/:id" , component:DetailsComponent },
    { path: "brands" , component:BrandsComponent },
    { path: "categories" , component:CategriesComponent },
    { path: "categorydetails/:id" , component:CategorydetailsComponent },
  ] },
  { path: "" , component:AuthLayoutComponent , children: [
    { path: "login" , component:LoginComponent },
    { path: "register" ,component:RegisterComponent },
    { path: "forgetpassword" , component:ForgetpasswordComponent },
  ] },
  { path: "**" , component:NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
