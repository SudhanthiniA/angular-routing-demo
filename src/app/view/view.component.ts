import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
resultData: any;
name: any;
  constructor(private customer:CustomerService, private router: ActivatedRoute) { }
  form=new FormGroup({
    name: new FormControl(),
  });
  ngOnInit() {
    // console.log(this.router.snapshot.params.id);
        // this.customer.viewDept(this.router.snapshot.params.id).subscribe((viewResult:any)=>{
        // console.log(viewResult);
        //   } );
          this.viewData(); 
  }
  viewData(){
    this.customer.viewDept(this.router.snapshot.params.id).subscribe((data:any)=>{
      console.log(data);
      this.resultData=data;
    })
  }

}
