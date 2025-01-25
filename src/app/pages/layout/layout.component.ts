import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
loggedUserData :any ;
router = inject(Router)
  constructor() {
    const localData = JSON.stringify('complaintuser');
    if(localData != null) {
this.loggedUserData =  JSON.parse(localData)
    }
  }
  onLogOff() {
    localStorage.removeItem('complaintuser');
    this.router.navigateByUrl('login')
  }
}
