import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';

const routes: Routes = [
  {path:"login",component:UserLoginComponent},
  {path:"Register",component:UserRegisterComponent},
  {path:"Profile",component:UserProfileComponent},
  {path:"userEdit",component:UserEditComponent},
  {path:"logout",component:UserLogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
