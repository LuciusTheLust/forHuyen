import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderService } from './order.service';


@Component({
  selector: 'order-root',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  title = 'OrderManagement';
  visible: boolean = false;
  constructor(private dialog: MatDialog, private route: Router, public order: OrderService) {}
  ngOnInit(): void {
    this.getOrder();
  }
  orderDataList: any

  openDialog() {
    this.visible =true;

  }


  getOrder(){
    this.order.getOrder().subscribe(data => {
      this.orderDataList = data
      console.log(this.orderDataList)
      this.visible = false
    })
  }

  deleteOrder(id: any){
    this.order.deleteOrder(id).subscribe(reponse => {
      this.getOrder()

    })
  }
  

 geturl (data: any) {
  
  this.route.navigate(['/orderitem/'+data])
  this.order.url_id = data;
 }

  // goToBrand(){
  //   this.route.navigate(['/brand'])
  // }
}