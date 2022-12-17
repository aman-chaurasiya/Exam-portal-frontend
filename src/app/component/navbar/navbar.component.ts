import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user:any=null;

  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginservice.isLogin();
    this.user=this.loginservice.getUser();
    this.loginservice.loginStatusSubject.asObservable().subscribe((data)=>{
      this.isLoggedIn=this.loginservice.isLogin();
    this.user=this.loginservice.getUser();
    })
  }
  public logout(){

    this.loginservice.isLogout();
    window.location.reload();
  }

}
