import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/category';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {

  categoryId:any = "";
  categoryDetails:Category = {} as Category


constructor(private _ActivatedRoute:ActivatedRoute , private _EcomdataService:EcomdataService){}


ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
      this.categoryId = params.get("id")        
      }
    })


    this._EcomdataService.getCategoryDetails(this.categoryId).subscribe({
      next:(response)=>{
        console.log(response);
        this.categoryDetails = response.data
      }
    })

}

}
