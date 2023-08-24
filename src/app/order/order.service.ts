import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class OrderService{
    formdata: any
    url_id: any
    constructor (public http:HttpClient){
    
    }
    getOrder(){
        let url= "http://localhost:47527/api/orders"
        return this.http.get(url);
    }

    deleteOrder(id: any){
        let url= "http://localhost:47527/api/orders"
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {}
        }
        return this.http.delete(url +'/'+id, options);
    }

    
}
