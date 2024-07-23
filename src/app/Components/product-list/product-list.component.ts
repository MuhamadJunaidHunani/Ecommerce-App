import { Component , OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  allProducts:any[] = [];
  constructor(private productService: ProductsService){}

  ngOnInit(): void {
    this.allProducts = this.productService.productList;
  }
}
