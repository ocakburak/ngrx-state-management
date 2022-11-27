import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.services';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @ViewChild("addForm") addForm: NgForm;
  constructor(
    private _product: ProductService
  ) { }

  ngOnInit(): void {
  }

  addProduct() {
    if (this.addForm.valid) {
      this._product.post(this.addForm.value, () => this.addForm.reset());
    }
  }

}
