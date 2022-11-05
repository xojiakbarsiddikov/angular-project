import { Component, OnInit } from '@angular/core';
import {ProductServices} from "../../services/product.services";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  title = 'angular app ';
  // products: IProduct[] = []
  loading = false
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductServices,
    public modalService: ModalService
  ) {
  }

  ngOnInit(): void {
    this.loading = true
    // this.products$ =  this.productsService.getAll().pipe(
    //   tap( () => this.loading = false)
    // )
    this.productsService.getAll().subscribe(() => {
      this.loading = false
    })


  }
}
