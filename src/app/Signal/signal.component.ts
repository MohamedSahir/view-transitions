import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TransitionNameDirective} from "../directives/transition-name.directive";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TransitionNameDirective, RouterLink],
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.css']
})
export class SignalComponent {


  test(){
    
  }

}
