import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StyleDirective} from './style.directive'; // Corrected import statement;

 
@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule,ProductsComponent,ProductCartComponent,StudentFormComponent,StyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  }
  
