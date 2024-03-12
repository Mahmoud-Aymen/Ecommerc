import { Brand } from './../../shared/services/brand';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {


  brands:Brand[] = [] 
  brandsDetails:any = []


  constructor( private _EcomdataService:EcomdataService ){}


  ngOnInit(): void {
      this._EcomdataService.getBrands().subscribe({
        next:(response)=>{
          this.brands = response.data
        }
      })
  }

  showModal(id:string , element:HTMLDivElement):void{
    element.classList.add("d-block");
    element.classList.remove("d-none");
     this._EcomdataService.getBrandsDetails(id).subscribe({
      next:(response)=>{
        this.brandsDetails = response.data
      }
    })
  }

  closeModal(modal:HTMLDivElement):void{
    modal.classList.add("d-none")
    this.brandsDetails = [];
  }

}
