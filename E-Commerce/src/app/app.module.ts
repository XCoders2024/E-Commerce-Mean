import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserLogoutComponent } from './components/user-logout/user-logout.component';
import { ShardModule } from './shared/shard.module';
import { ProductsModule } from './products/products.module';
//import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
 
    
       UserLoginComponent,
                UserRegisterComponent,
                UserProfileComponent,
                UserEditComponent,
                UserLogoutComponent
                UserEditComponent,
            

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShardModule,
    ProductsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
