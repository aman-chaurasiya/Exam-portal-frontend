import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private userService:UserService,private snack:MatSnackBar) { }
  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',

  }

  ngOnInit(): void {
  }
  
  formSubmit(){
    console.log(this.user);
    if(this.user.username=="" || this.user.username==null){
      this.snack.open("Username is required !!",'',{
        duration:3000,
        verticalPosition:'top',
      });
      return
    }
    if(this.user.password=='' || this.user.password==null){
      this.snack.open("password is required !!",'',{
        duration:3000,
        verticalPosition:'top',
      });
      return
    }
    if(this.user.firstname=='' || this.user.firstname==null){
      this.snack.open("Firstname is required !!",'',{
        duration:3000,
        verticalPosition:'top',
      });
      return
    }
    if(this.user.lastname=='' || this.user.lastname==null){
      this.snack.open("lastname is required !!",'',{
        duration:3000,
        verticalPosition:'top',
      });
      return
    }
    if(this.user.email=='' || this.user.email==null){
      this.snack.open("email is required !!",'',{
        duration:3000,
        
      });
      return
    }
    if(this.user.phone=='' || this.user.phone==null){
      this.snack.open("phone is required !!",'',{
        duration:3000,
        
      });
      return
    }


    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
      Swal.fire('Success','You are register','success'
        
    )
      window.location.href="/login"

      },(error)=>{
        console.log(error);
       Swal.fire('Failed','Somthing went wrong','error');

      }
    )
    
  }

}
