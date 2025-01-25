import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiURL:string = 'https://projectapi.gerasim.in/api/Complaint/';
  constructor(private http : HttpClient) { }
  ShowLogin(obj:any) {
return this.http.post(this.apiURL + 'login' , obj);
  }
  showRegister(obj:any) {
    return this.http.post(`${this.apiURL}AddNewUser` , obj)
  }
  getParentDeprt() {
return this.http.get(`${this.apiURL}GetParentDepartment`)
  }
  GetChildDepartmentByParentId(id: number) {
    return this.http.get(`${this.apiURL}GetChildDepartmentByParentId?deptId=${id}`)
      }
}
