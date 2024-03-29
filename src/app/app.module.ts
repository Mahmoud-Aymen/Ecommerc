import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategriesComponent } from './components/categries/categries.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DetailsComponent } from './components/details/details.component';
import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import{ BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyPipe } from './buy.pipe';
import { TermtextPipe } from './termtext.pipe';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ChekoutComponent } from './components/chekout/chekout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { MyHttpInterceptor } from './interceptor/my-http.interceptor';
import { CategorydetailsComponent } from './components/categorydetails/categorydetails.component';
import { WhislistComponent } from './components/wishlist/wishlist.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductsComponent,
    BrandsComponent,
    CategriesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DetailsComponent,
    NavBlankComponent,
    NavAuthComponent,
    BlankLayoutComponent,
    AuthLayoutComponent,
    BuyPipe,
    TermtextPipe,
    SearchPipe,
    ChekoutComponent,
    AllordersComponent,
    CategorydetailsComponent,
    WhislistComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: MyHttpInterceptor , multi:true },
    {provide:HTTP_INTERCEPTORS , useClass: LoadingInterceptor , multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
