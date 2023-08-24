import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OrderItemService{
    formdata: any
    constructor (public http:HttpClient){
    
    }
    getOrderitem(){
        let url= "http://localhost:47527/api/orderitems"
        return this.http.get(url);
    }

    getOrderitemById(id: any){
        let url= "http://localhost:47527/api/orderitems"
        return this.http.get(url+"/"+id);
    }

    updateOrderItem(data: any){
        let url = "http://localhost:47527/api/orderitems"
        return this.http.put(url,data)
    }

    createOrderItem(data: any){
        let url = "http://localhost:47527/api/orderitems"
        return this.http.post(url,data)
    }

    deleteOrderItem(id: any){
        let url= "http://localhost:47527/api/orderitems"
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {}
        }
        return this.http.delete(url +'/'+id, options);
    }

    
}
