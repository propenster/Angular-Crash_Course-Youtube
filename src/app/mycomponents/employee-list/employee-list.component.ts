import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit { 

  Employees: any = [];

  constructor(public service: UtilService) { }

  ngOnInit(): void {

    this.fetchAllEmployees();
  }


  fetchAllEmployees() {
    this.service.getAllEmployees().subscribe((res: {})=>{
      this.Employees = res;
      console.log(this.Employees);
    })
  }


  deleteEmployee(id){
    if(window.confirm("Are you sure to delete this employee?")){
      //remove employee from the UI
      this.Employees = this.Employees.filter(x => x.id !== id);

      //MAKE a subscrption to our Service to DELET
      this.service.deleteEmployee(id).subscribe((res: {})=>{
        console.log("employee deleted successfully!");
      })
    }
  }

}
