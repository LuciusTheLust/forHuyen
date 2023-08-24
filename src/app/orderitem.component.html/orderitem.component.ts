import { OrderService } from './../order/order.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderItemService } from './orderitem.service';



@Component({
  selector: 'orderitem-root',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderItemComponent implements OnInit{
  visible: boolean = false;
  title = 'OrderManagement';
  constructor(private dialog: MatDialog, private route: Router, public orderitem: OrderItemService, private order: OrderService) {}
  ngOnInit(): void {
    debugger
    if (this.order.url_id != null){
      this.getOrderItemById(this.order.url_id);
    }
    else{
      this.getOrderitem();
    }
    
  }
  orderItemDataList: any

  getOrderitem(){
    this.orderitem.getOrderitem().subscribe(data => {
      this.orderItemDataList = data
      console.log(this.orderItemDataList)
      this.visible =false;
    })
  }


  getOrderItemById(id: any){
    this.orderitem.getOrderitemById(id).subscribe(data => {
      this.orderItemDataList = data
      console.log(this.orderItemDataList)
    })
  }

  populateform(selected: any){
    this.orderitem.formdata = selected
    this.visible =true;

  }

  onUpdate(data: any){
    this.orderitem.updateOrderItem(data).subscribe(data => {
      console.log(data)
      this.getOrderitem()
    })
  }

  onSubmit(data: any){
    this.orderitem.createOrderItem(data).subscribe(data => {
      console.log(data)
      this.getOrderitem()
    })
  }

  deleteOrderItem(id: any){
    this.orderitem.deleteOrderItem(id).subscribe(reponse => {
      this.getOrderitem()

    })
  }



}