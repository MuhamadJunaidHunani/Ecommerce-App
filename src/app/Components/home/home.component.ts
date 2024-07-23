import { FormsModule, NgModel } from '@angular/forms';
import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
name=[];
changeval( value:any){
  this.name = value
}
}