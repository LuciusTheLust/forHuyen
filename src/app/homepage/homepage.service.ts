import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService{
    formdata: any
    constructor (public http:HttpClient){
    
    }
    getProduct(){
        let url= "http://localhost:47527/api/products"
        return this.http.get(url);
    }

    deleteProduct(id: any){
        let url= "http://localhost:47527/api/products"
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {}
        }
        return this.http.delete(url +'/'+id, options);
    }

    createProduct(data: any){
        let url = "http://localhost:47527/api/products"
        return this.http.post(url,data)
    }

    updateProduct(data: any){
        let url = "http://localhost:47527/api/products"
        return this.http.put(url,data)
    }
}
