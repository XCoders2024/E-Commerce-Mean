import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../models/iuser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiResponse } from '../../models/api-response';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {
  userEditForm:FormGroup;
  httpOption;
  @ViewChild('alertDiv') alertDiv?:ElementRef;
  @ViewChild('alertParagraph') alertParagraph?:ElementRef;
  user:IUser={
   userName: "",
   userEmail:"",
   userPassword:"",
   isAdmin:false,
   img:""
  }

 constructor(private httpClient:HttpClient){
   this.httpOption={
     headers:new HttpHeaders({
       'Content-Type':'application/json'
     })
   };

  this.userEditForm=new FormGroup(
    {
      userName: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(50),Validators.pattern('^[A-Za-z\s]+$')]),
      img:new FormControl('',[Validators.pattern('^(http(s?):\/\/)([^\s\/]+)(\/.+)(\.(jpg|jpeg|png|gif|bmp))$')])
    }
  );

  
 }


 userName(){
  return this.userEditForm.get('userName');
 }

 img(){
   return this.userEditForm.get('img');
  }


 ngOnInit(): void {
   this.fillForm();
 }
 


fillForm(){
 this.httpOption.headers = this.httpOption.headers.set('useremail', sessionStorage.getItem("userEmail") as string);

 this.httpClient.get<ApiResponse>('http://localhost:3005/api/v1/profile',this.httpOption).subscribe(
   response => {
     console.log('Response:', response);
     if(response.message){
       //alert(response.message);
       this.showAlert(response.message);
     }
     if(response){
       this.user=response.user;

       this.userEditForm.patchValue({         //can provide some properties
         userName: this.user?.userName,
         img: this.user?.img
         }); 
     }
     
   },
   error => {
     console.error('Error:', error);
     //alert(error);
     this.showAlert(error.message);
   }
 );

}

submit(){    
 const editUser:any={
   userName:this.userEditForm.get("userName")?.value,                                                              
   img:this.userEditForm.get("img")?.value,
   userEmail:sessionStorage.getItem("userEmail") as string
 }
 
 
                                                                         //request body
 this.httpClient.patch<ApiResponse>('http://localhost:3005/api/v1/profile',editUser).subscribe(
     response => {
       console.log('Response:', response);
         //alert(response.message);
         this.showAlert(response.message);
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
