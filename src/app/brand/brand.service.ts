import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class BrandService{
    formdata: any
    constructor (public http:HttpClient){
    
    }
    getBrand(){
        let url= "http://localhost:47527/api/brands"
        return this.http.get(url);
    }

    deleteBrand(id: any){
        let url= "http://localhost:47527/api/brands"
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            body: {}
        }
        return this.http.delete(url +'/'+id, options);
    }

    createBrand(data: any){
        let url = "http://localhost:47527/api/brands"
        return this.http.post(url,data)
    }

    updateBrand(data: any){
        let url = "http://localhost:47527/api/brands"
        return this.http.put(url,data)
    }
}