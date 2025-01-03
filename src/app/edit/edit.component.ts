import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /* Variable Declaration To display Value */
 
  name: string;
  mobileno: number;
 result: any;
  /* Form Vaildation */
 
  
 total: any;
  customers: any;

  gender: string[]=["Male", "Female", "Transgender"];
  skillVal: Array<any>=["HTML", "CSS", "Angular"];

  constructor(private customer:CustomerService, private router: ActivatedRoute){}
  
  editForm=new FormGroup({
    name: new FormControl('', Validators.required),
    
    mobileno: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    number1: new FormControl('', Validators.required),
    number2: new FormControl('', Validators.required),
        number3: new FormControl(),        
        genderselect: new FormControl('', Validators.required),
        skillsUpdate: new FormArray([], Validators.required),
      });
    
  ngOnInit() {
  //  console.log(this.router.snapshot.params.id);
   this.customer.editDept(this.router.snapshot.params.id).subscribe((resultId:any)=>{
    console.log(resultId);
    this.editForm=new FormGroup({
      name: new FormControl(resultId['name']),
      
      mobileno: new FormControl(resultId['mobileno']),
      
      number1: new FormControl(resultId['number1']),
      number2: new FormControl(resultId['number2']),              
      number3: new FormControl(resultId['number3']),
      genderselect: new FormControl(resultId['genderselect']),      
      skillsUpdate: new FormControl(resultId['skillsUpdate']),
        });
   })
  }
  onSkillsChangs(event: any){
    const selectedSkills = (this.editForm.controls['skillsUpdate'] as FormArray);
    if(event.target.checked) {
      selectedSkills.push(new FormControl(event.target.value));
    } else {
      const index = selectedSkills.controls.findIndex(x=>x.value === event.target.value);
      selectedSkills.removeAt(index);
    }
  }
  addNumber() {
    this.total=parseInt(this.editForm.controls.number1.value)+parseInt(this.editForm.controls.number2.value);
    console.log(this.total);
    this.editForm.controls.number3.setValue(this.total);
    // this.form.get('number3').setValue(this.total);

}

 updateData() {
  console.log(this.editForm.value);
  //  this.result="The user name is"+ this.form.value.name+ this.form.value.mobileno;
   this.customer.updateDept(this.router.snapshot.params.id, this.editForm.value).subscribe((updateVal: any)=> {
     console.log(updateVal);
   });
  }
reset(){
  this.editForm.reset();
}

}
