import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  //Employee
  @Input() Employee: any = { name: '', email: '', phone: '', department: '', salary: ''};

  constructor(public service: UtilService, public router: Router) { }

  ngOnInit(): void {
  }

  AddEmployee(){
    this.service.addEmployee(this.Employee).subscribe((res: {})=>{
      console.log('Employee added successfully!');
      this.router.navigate(['/']);
    })
  }

}
