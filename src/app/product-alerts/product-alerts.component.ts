// import { Component, Input } from '@angular/core'; // Input to receive product data
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  // decorator indicates class is a component. provides metadata on the component.
  selector: 'app-product-alerts', // angular convention to add prefix "app-" to component name as selector
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
}) // this definition also exports the class below
export class ProductAlertsComponent {
  // this class handles component functionality

  @Input() product: Product | undefined; // decorator indicates property value passes in from component's parent, which will be ProductListComponent.
  // "product" here = property

  @Output() notify = new EventEmitter(); // decorator Output, allows PAComponent to emit even when "notify" property value changes
  // property "notify" is an instance of EventEmitter
}
