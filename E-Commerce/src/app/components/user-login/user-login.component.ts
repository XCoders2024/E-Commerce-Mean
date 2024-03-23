import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/iuser';
import { ApiResponse } from '../../models/api-response';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  userLoginForm:FormGroup;
  httpOption;
  @ViewChild('alertDiv') alertDiv?:ElementRef;
  @ViewChild('alertParagraph') alertParagraph?:ElementRef;

  constructor(private httpClient:HttpClient){
    this.httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    };


   this.userLoginForm=new FormGroup(
     {
       userEmail:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(255),Validators.email]),
       userPassword:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(1024)]),
                 
     }
   );
  }


 
 
  userEmail(){
   return this.userLoginForm.get('userEmail');
  }

  userPassword(){
    return this.userLoginForm.get('userPassword');
   }

  Submit() {
    let UserLogin:IUser = this.userLoginForm.value as IUser; 

    //const userEmail = this.userLoginForm.get('userEmail')?.value;  //how to access the value of an input in the form
  

    //call api 
    this.httpClient.post<ApiResponse>('http://localhost:3005/api/v1/login', UserLogin)
    .subscribe(
      response => {
        console.log('Response:', response);
         //alert(response.message);
         this.showAlert(response.message);
         if(response.token){
          sessionStorage.setItem("token", response.token);
          sessionStorage.setItem("userEmail", response.userEmail);
         }
      },
      error => {
        console.error('Error:', error);
        //alert(error);
        this.showAlert(error.message);
      }
    );
 
}

showAlert(message: string) {
  if (this.alertDiv && this.alertParagraph) {
      this.alertParagraph.nativeElement.textContent = message;
      this.alertDiv.nativeElement.style.display="block";
  }
}

dismissFun(){
  if (this.alertDiv) {
    this.alertDiv.nativeElement.style.display="none";
}
}
}
