import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductService } from './homepage.service';


@Component({
  selector: 'homepage-root',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  title = 'OrderManagement';
  visible: boolean = false
  constructor(private dialog: MatDialog, private route: Router, public product: ProductService) {}
  ngOnInit(): void {
    this.getProduct();
  }
  productDataList: any

  openDialog() {
    this.visible =true;

  }


  getProduct(){
    this.product.getProduct().subscribe(data => {
      this.productDataList = data
      console.log(this.productDataList)
      this.visible = false
    })
  }

  deleteProduct(id: any){
    this.product.deleteProduct(id).subscribe(reponse => {
      this.getProduct()

    })
  }

  onSubmit(data: any){
    this.product.createProduct(data).subscribe(data => {
      console.log(data)
      this.getProduct()
    })
  }

  populateform(selected: any){
    this.product.formdata = selected
    this.visible =true;

  }

  onUpdate(data: any){
    this.product.updateProduct(data).subscribe(data => {
      console.log(data)
      this.getProduct()
    })
  }

  // goToBrand(){
  //   this.route.navigate(['/brand'])
  // }
}