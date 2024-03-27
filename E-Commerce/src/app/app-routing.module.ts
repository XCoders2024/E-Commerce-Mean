import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';

const routes: Routes = [
  {path:'',component:AllProductComponent},
  {path:"login",component:UserLoginComponent},
  {path:"Register",component:UserRegisterComponent},
  {path:"Profile",component:UserProfileComponent},
  {path:"userEdit",component:UserEditComponent},
  {path:"product",component:AllProductComponent},
  {path:"details",component: ProductDetailsComponent},
  { path: '**', redirectTo: 'products', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
