import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // bununla backend deki dataya ulaşabiliyoruz.
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44369/api/'
  constructor(private httpClient: HttpClient) { }  //HttpClient türünde bir nesne istiyorum demek. newlemek yani instance oluşturmak.

  getProducts():Observable<ListResponseModel<Product>> {
    // gelen datayla ProductResponseModel i match et
    let newPath = this.apiUrl + 'Products/getall'
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + 'Products/getbycategory?categoryId=' + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
}
