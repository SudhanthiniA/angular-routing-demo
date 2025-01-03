import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from '../filterpipe/filterpipe.pipe';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.scss']
})
export class DepartmentlistComponent implements OnInit {
  customers: any;
searchData: any;
a: any;
b: any;
c: any;
  constructor(private service: CustomerService, private router: Router,) {
    this.service.getData().subscribe(data => {
      this.customers = data;
      
      console.log(data);
    });
	
  }

 
  ngOnInit() {
    this.a=1;  
this.b=this.a++;  
console.log("the val", this.b);
// this.c=this.++a;  

  }

  //Delete Record
deleteDept(deptid: number){

  // console.log(deptid);
this.service.deleteDept(deptid).subscribe((result: any)=> {
  this.fetchData();
  
  console.log(result);
});


}
fetchData() {
  this.service.getData().subscribe(data =>{
      this.customers = data;
  });
}

  //Edit Record
  editDept(deptid: number){
  this.service.editDept(deptid).subscribe((result: any)=> {
    console.log(result);
  });
}

// onEdit(event) {
//   this.router.navigate(['/departmentadd/edit/' + event.id]);
// }
}
