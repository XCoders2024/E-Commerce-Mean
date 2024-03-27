import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent {

    products: any[] = [];
    errorMsg: any;
    selectedItem: string = 'all';
    allCategory: any[] = [];
    //--------------------------------------------------------------------------
    constructor(private service: ProductService) {}

    ngOnInit(): void {
      this.getProducts();
      this.getCategory();
    }
  /*filterData(event) {
      let value = event.target.value;
      this.selectedItem = value;
      this.getProducts();
      console.log(this.selectedItem);
    }*/
    //--------------------------------------------------------------------------
    getProducts() {
      this.service.getAllProducts().subscribe({
        next: (result: any) => {
          this.products = result;
          console.log(result);
        },
        error: (err) => (this.errorMsg = err),
      });
    }
  
  getCategory() {
      this.service.getAllCategory().subscribe({
        next: (result: any) => {
          this.allCategory = result;
          console.log(result);
        },
        error: (err) => (this.errorMsg = err),
      });
 
  }
}
