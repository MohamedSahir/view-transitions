
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TransitionNameDirective} from "../directives/transition-name.directive";
import {RouterLink} from "@angular/router";
import { Component, computed, effect, signal } from '@angular/core';
@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransitionNameDirective, RouterLink],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {

 // `signal`: create a settable signal
 readonly name = signal('World');
 // `computed`: create a signal of computed value (readonly)
 readonly message = computed(() => {
   return `Hello ${this.name()}!`;
 });

 selectedVehicle = signal<Vehicle>({ id: 1, name: 'AT-AT', price: 10000 });

 constructor() {
   effect(() => {
     console.log(this.message());
   });
 }



 currency = signal('USD');


// sets new value to currency
  test(){
    this.currency.set('CAD');
  }

}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
 }
