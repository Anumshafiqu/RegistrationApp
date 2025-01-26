import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { style } from '@angular/animations';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrl: './complaint-list.component.css'
})
export class ComplaintListComponent implements OnInit {
  loggedUserData: any;
  complaintList: any[] = [];
  StatusList: any[] = [];

  masterService = inject(MasterService);
  complaintObj: any = {
  }
  complaints: { title: string; description: string }[] = [];
  newComplaint = { title: '', description: '' };

  addComplaint() {
    if (this.newComplaint.title && this.newComplaint.description) {
      this.complaints.push({ ...this.newComplaint });
      this.newComplaint = { title: '', description: '' }; // Reset form
    }
  }
  ngOnInit(): void {
    this.getstatus();
    // const localData = JSON.stringify('complaintuser');
    const localData = localStorage.getItem('complaintuser')
    if (localData != null) {
      this.loggedUserData = JSON.parse(localData);
      if (this.loggedUserData.role == 'admin') {
        this.getAllComplaint();
      } else {
        this.getAllComplaintBserId(this.loggedUserData.userId)
      }
    }
  }
  getAllComplaint() {
    this.masterService.getAllComplaints().subscribe((res: any) => {
      this.complaintList = res.data;
    })

  }
  getstatus() {
    this.masterService.getComplaintStatus().subscribe((res: any) => {
      this.StatusList = res.data;
    })

  }
  getAllComplaintBserId(id: number) {
    this.masterService.getComplaintsCreatedByUserId(id).subscribe((res: any) => {
      this.complaintList = res.data;
    });
  }


  openModel(data: any) {
    this.complaintObj = data
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'block'
    }
  }
  // updatestatus() {
  //   this.masterService.updateNewComplaint(this.complaintObj).subscribe((res: any) => {
  //     if (this.loggedUserData.role == 'admin') {
  //       this.getAllComplaint();
  //     } else {
  //       this.getAllComplaintBserId(this.loggedUserData.userId)
  //     }
  //   });
  // }

  closeModel() {
    const model = document.getElementById('myModal');
    if (model != null) {
      model.style.display = 'none'
    }
  }
}
