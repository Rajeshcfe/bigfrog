import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSelectSingleViewComponent } from './product-select-single-view/product-select-single-view.component';

const routes: Routes = [
  { path: 'post/product', component: ProductSelectSingleViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
