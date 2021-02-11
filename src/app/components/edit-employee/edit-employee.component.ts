import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  id: number = this.actRoute.snapshot.params['id'];
  @Input() Employee: any = {};

  constructor(public actRoute: ActivatedRoute, public service: UtilService, public router: Router) { }

  ngOnInit(): void {
    this.service.getSingleEmployee(this.id).subscribe((res: {})=>{
      this.Employee = res;
      console.log(this.Employee);
    })
  }

  editEmployee(){

    if(window.confirm('Are you sure you want to update this employee?')){
      this.service.updateEmployee(this.id, this.Employee).subscribe((res: {})=>{
        this.router.navigate(['/']);
        console.log('Employee updated successfully!');
        
      })
    }



  }

}
