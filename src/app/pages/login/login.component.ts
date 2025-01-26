import { Component, inject } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  masterService = inject(MasterService);
  router = inject(Router)
  RegisterObj:any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "role": "",
    "createdDate": new Date(),
    "password": "",
    "projectName": "",
    "refreshToken": "",
    "refreshTokenExpiryTime": "2025-01-25T10:25:39.413Z"
  
  }
  LoginObj:any = {
  "userName": "",
  "password": ""
  }
  isLoginFormVisible: boolean = true;
  onRegister() {
    this.isLoginFormVisible = false;
  }
  onLogin() {
    this.isLoginFormVisible = true;
  }
  shworegistrtion() {
    debugger;
    this.masterService.showRegister(this.RegisterObj).subscribe((res:any)=>{
      if(res.result) {
        alert('Registration Success')
      }else {
        alert(res.message)
      }
    })
  }
  login() {
    debugger;
    this.masterService.ShowLogin(this.LoginObj).subscribe((res:any)=>{
      if(res.result) {
        localStorage.setItem('complaintuser', JSON.stringify(res.data));
        this.router.navigateByUrl('new-complaint');
      }else {
        alert(res.message);
      }
    })
  }
}
