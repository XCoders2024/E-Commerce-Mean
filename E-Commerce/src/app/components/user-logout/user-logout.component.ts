import { Component } from '@angular/core';
import { HandleNavBarService } from '../../services/handle-nav-bar.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrl: './user-logout.component.css'
})
export class UserLogoutComponent {

constructor(private handleNavBarService:HandleNavBarService) {
  
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userEmail");
  this.handleNavBarService.isLoggedSubject.next(false);
}


}
