import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BrandService } from './brand.service';


@Component({
  selector: 'brand-root',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit{
  title = 'OrderManagement';
  visible: boolean = false
  constructor(private dialog: MatDialog, private route: Router, public brand: BrandService) {}
  ngOnInit(): void {
    this.getBrand();
  }
  brandDataList: any

  openForm() {
    this.visible =true;

  }


  getBrand(){
    this.brand.getBrand().subscribe(data => {
      this.brandDataList = data
      console.log(this.brandDataList)
      this.visible = false
    })
  }

  deleteBrand(id: any){
    this.brand.deleteBrand(id).subscribe(reponse => {
      this.getBrand()

    })
  }

  onSubmit(data: any){
    this.brand.createBrand(data).subscribe(data => {
      console.log(data)
      this.getBrand()
      this.visible = false
    })
  }

  populateform(selected: any){
    this.brand.formdata = selected
    this.visible =true;

  }

  onUpdate(data: any){
    this.brand.updateBrand(data).subscribe(data => {
      console.log(data)
      this.getBrand()
    })
  }

  // goToBrand(){
  //   this.route.navigate(['/brand'])
  // }
}