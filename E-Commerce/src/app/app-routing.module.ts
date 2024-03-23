import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path:"login",component:UserLoginComponent},
  {path:"Register",component:UserRegisterComponent},
  {path:"Profile",component:UserProfileComponent},
  {path:"userEdit",component:UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
