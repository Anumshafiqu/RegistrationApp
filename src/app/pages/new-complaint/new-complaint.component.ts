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
  ParentDepartId : number = 0;
  complaintObj :any ={
    "complaintId": 0,
    "userId": 0,
    "createdDate": new Date(),
    "childDeptId": 0,
    "complaintTitle": "",
    "complaintNo": "",
    "complaintDetails": "",
    "isAlreadyReportedThis": true,
    "oldComplaintNo": "",
    "complaintStatusId": 0
  }
  ngOnInit(): void {
    this.loadParentDeprt();
  }

  loadParentDeprt() {
    this.masertService.getParentDeprt().subscribe((res: any) => {
      this.parentListDepart = res.data;
    }, error => {

    })
  }
  getDepart() {

  }
}
