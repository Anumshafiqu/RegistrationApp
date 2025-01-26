import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-new-complaint',
  templateUrl: './new-complaint.component.html',
  styleUrl: './new-complaint.component.css'
})
export class NewComplaintComponent implements OnInit {
  parentListDepart: any[] = [];
  masertService = inject(MasterService);
  ParentDepartId: number = 0;
  childDarptId: any[] = [];
  complaintObj: any = {
    "complaintId": 0,
    "userId": 0,
    "createdDate": new Date(),
    "childDeptId": 0,
    "complaintTitle": "",
    "complaintNo": "",
    "complaintDetails": "",
    "isAlreadyReportedThis": false,
    "oldComplaintNo": "",
    "complaintStatusId": 0
  }
  ngOnInit(): void {
    this.loadParentDeprt();
    const localData = JSON.stringify('complaintuser');
    if (localData != null) {
      this.complaintObj.userId = JSON.parse(localData).userId;
    }
  }

  loadParentDeprt() {
    this.masertService.getParentDeprt().subscribe((res: any) => {
      this.parentListDepart = res.data;
    }, error => {

    })
  }
  getDepart() {
    this.masertService.GetChildDepartmentByParentId(this.ParentDepartId).subscribe((res: any) => {
      this.childDarptId = res.data;
    }, error => {

    })
  }
  onSave() {
    this.masertService.createNewComplaint(this.complaintObj).subscribe((res: any) => {
      if (res.result) {
        alert('complaint created success')
      }
      else {
        alert(res.message)
      }
    }, error => {

    })
  }
}
