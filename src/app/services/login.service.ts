import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Base_Url from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  public loginStatusSubject=new Subject<boolean>();


  public currentUser(){
    return this.http.get(`${Base_Url}/current-user`);
  }

  public generateToken(loginData:any){
      return this.http.post(`${Base_Url}/generate-token`,loginData);

  }
  public loginUser(token:any){
    localStorage.setItem('token',token);
    
    return true;
  }
  //isLogin :user is logged in or not
  public isLogin(){
    let tokenstring=localStorage.getItem('token')
    if(tokenstring==undefined || tokenstring.trim()=='' || tokenstring==null){
      return false;
    }else{
      return true;
    }
  }
  //logout: remove from local storage
  public isLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }
  //set user
  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));

  }
  //get user
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }
    else{
      this.isLogout();
      return null;
    }
  }
  public getUserRole(){
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
