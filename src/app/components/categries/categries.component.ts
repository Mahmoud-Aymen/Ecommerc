import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/category';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categries',
  templateUrl: './categries.component.html',
  styleUrls: ['./categries.component.css']
})
export class CategriesComponent implements OnInit {

  categoryData:Category[] = []

  constructor(private _EcomdataService:EcomdataService){}

  ngOnInit(): void {
      this._EcomdataService.getCategories().subscribe({
        next:(response)=>{
          this.categoryData = response.data
        }
      })
  }

}
