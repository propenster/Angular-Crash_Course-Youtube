import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-single-employee',
  templateUrl: './single-employee.component.html',
  styleUrls: ['./single-employee.component.css']
})
export class SingleEmployeeComponent implements OnInit {

  Employee: any = {};
  id: number = this.actRoute.snapshot.params['id'];

  constructor(public service: UtilService, public actRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.fetchSingleEmployee();
  }


  fetchSingleEmployee(){
    this.service.getSingleEmployee(this.id).subscribe((res: {})=>{
      this.Employee = res;
      console.log(this.Employee);
    })
  }

}
