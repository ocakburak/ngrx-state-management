import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/models/basket.model';
import { ProductModel } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductModel[] = []
  constructor(
    private _product: ProductService,
    private _basket: BasketService
  ) {
    this._product.getList(() => this.products = _product.products);
  }

  ngOnInit(): void {
  }

  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;

    this._basket.post(basketModel);
  }
}
