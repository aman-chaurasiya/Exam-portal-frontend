import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private snack: MatSnackBar, private loginService: LoginService,private router:Router) {}

  public loginData = {
    username: '',
    password: '',
  };
  ngOnInit(): void {}
  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.snack.open('Username is required', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required', '', {
        duration: 3000,
      });
      return;
    }
    this.loginService.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //login
        this.loginService.loginUser(data.token);
        this.loginService.currentUser().subscribe((user: any) => {
          this.loginService.setUser(user);
          console.log(user);
          //role admin: redirect to admin dashbord
          if (this.loginService.getUserRole() == 'ADMIN') {
            //admin user dashboard
            window.location.href = '/admin';
            // this.router.navigate(['admin'])
            this.loginService.loginStatusSubject.next(true)
          } else if (this.loginService.getUserRole() == 'NORMAL') {
            //normal user dashboard
            this.loginService.loginStatusSubject.next(true)
            window.location.href = '/user/0';
            // this.router.navigate(['user'])
          } else {
            this.loginService.isLogout();
          }
        });
      },
      (error) => {
        console.log('error');
        console.log(error);
        this.snack.open('inalid details !! Try again ', '', {
          duration: 3000,
        });
      }
    );
  }
}
