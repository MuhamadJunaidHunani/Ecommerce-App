import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CartComponent } from './Components/cart/cart.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'product', component:ProductListComponent},
    {path:'cart', component:CartComponent},
];
