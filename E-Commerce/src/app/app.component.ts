import { Component, OnInit } from '@angular/core';
import { HandleNavBarService } from './services/handle-nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';

  isUserLogged:boolean=false;

  
  constructor(private handleNavBarService:HandleNavBarService) {
    
    
  }


  ngOnInit(): void {
    // this.isUserLogged=this.handleNavBarService.isUserLogged();          //not updated always due to the changes in the userLogin component

    this.handleNavBarService.getLoggedStatus().subscribe((status)=>{       //updated always due to the changes in the userLogin component
     this.isUserLogged=status;
    }); 
  }

 
}
