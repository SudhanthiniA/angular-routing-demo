import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-departmentadd',
  templateUrl: './departmentadd.component.html',
  styleUrls: ['./departmentadd.component.scss']
})

export class DepartmentaddComponent implements OnInit {

  /* Variable Declaration To display Value */
 me: string;
  mobileno: number;
 result: any;
 total: any;
 thingsHobbies:any=[];
//  storeSkills: Array<any>=[];
  /* Form Vaildation */
  genderDefault: string="Select";
  gender: string[]=["Male", "Female", "Transgender"];
  skills: Array<any>=[];
  skillVal: Array<any>=["HTML", "CSS", "Angular"];

  valueOne: Array<any>=[];
  valueTwo: Array<any>=[];

  // countries: Array<any> = [
  //   { name: 'India', value: 'india' },
  //   { name: 'France', value: 'france' },
  //   { name: 'USA', value: 'USA' },
  //   { name: 'Germany', value: 'germany' },
  //   { name: 'Japan', value: 'Japan' }
  // ];
  customers: any;
  


  constructor(private customer:CustomerService){}
  
  form=new FormGroup({
    name: new FormControl('', Validators.required),
    
    mobileno: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    number1: new FormControl('', Validators.required),
    number2: new FormControl('', Validators.required),
        number3: new FormControl(),
    genderselect: new FormControl('', Validators.required),
    skillsUpdate: new FormArray([], Validators.required),
    inputValue: new FormControl(),
    hobbiesArray: new FormArray([]),
    startno: new FormControl([], Validators.required),
    endno: new FormControl([], Validators.required),
    regdate: new FormControl(formatDate(new Date(), "yyyy-MM-dd", "en"))
      });   
     
      public get things(){        
        return (this.form.get('hobbiesArray') as FormArray);
      }
      // get storeThings() {
      //   return this.form.get('inputValue').value;
      // }
      showArrayValue(){
        let val1=parseInt(this.form.controls.startno.value);
        let val2=parseInt(this.form.controls.endno.value);
        if(val1>val2) {
          const errorText="Enter minimum value";
          
        }
           for(let i=val1; val1<=val2; i++) {
            this.valueTwo.push(val1);
            val1=val1+1;
      i++;
      
      
    
     console.log(this.valueTwo);
        }
      }
      addControl(){
        console.log(this.form.get('inputValue').value);
        // this.thingsHobbies.push(this.form.get('inputValue').value);
        // console.log(this.thingsHobbies);
       this.things.value.push(this.form.get('inputValue').value);
//      const result= this.storeThings;
// this.things.push(this.form.get('inputValue').value);
        console.log(this.form.get('hobbiesArray').value);
      }
      onSkillsChangs(event: any){
        const selectedSkills = (this.form.controls['skillsUpdate'] as FormArray);
        if(event.target.checked) {
          selectedSkills.push(new FormControl(event.target.value));
        } else {
          const index = selectedSkills.controls.findIndex(x=>x.value === event.target.value);
          selectedSkills.removeAt(index);
        }
      }
      // onCheckboxChange(event: any) {
    
      //   const selectedCountriesVal = (this.form.controls['selectedCountries'] as FormArray);
      //   if (event.target.checked) {
      //     selectedCountriesVal.push(new FormControl(event.target.value));
      //   } else {
      //     const index = selectedCountriesVal.controls
      //     .findIndex(x => x.value === event.target.value);
      //     selectedCountriesVal.removeAt(index);
      //   }
      // }

  ngOnInit() {
    // this.gender.push("Mariamman");
    console.log(this.gender);
  //   const control=this.form.get('vehicles');
  // console.log(control);
  
  }

  // get thingsArray():FormArray {
  //   return (this.form.get('things') as FormArray);
  // }

  
//   setVehicles()
//   {
//     const control=this.form.get('vehicles');
//     if (control)
//       control.setValue(this.Vehicles.filter(x=>x.active).map(x=>x.value))
//   }
  addNumber() {
    this.total=parseInt(this.form.controls.number1.value)+parseInt(this.form.controls.number2.value);
    console.log(this.total);
    this.form.controls.number3.setValue(this.total);
    // this.form.get('number3').setValue(this.total);

}
// getValue() {
//   console.log((this.form.get('skillNewValue') as FormArray).controls) ;
//   const skillData = this.form.controls.storeSkillValue.value;
//   (this.form.get('skillNewValue') as FormArray).push(skillData);
//   console.log((this.form.get('skillNewValue') as FormArray).value);
// }
// checkboxValue(){
//   const control=this.form.get('vehicles');
//   console.log(control);
// }
// setCheckboxValue(){
  
//   const control=this.form.get('skills');
//   if(control) {
//     control.setValue(this.skills.filter(x=>x.active).map(x=>x.value))
//   }
// }
// onCheckboxChange(e){
//   const skills: FormArray = this.form.get('skills') as FormArray;
//   if(e.target.checked) {
//     skills.push(new FormControl(e.target.value));
//   }
//   else {
//     let i: number = 0;
//     skills.controls.forEach((item: FormControl) => {
//       if (item.value == e.target.value) {
//         skills.removeAt(i);
//         return;
//       }
//       i++;
//     });
//   }
// }





// const selectedSkills = (this.form.controls['skillsUpdate'] as FormArray);
// if(event.target.checked) {
//   selectedSkills.push(new FormControl(event.target.value));

  onSubmit() {
    // const skillResult = this.form.get('storeSkillValue').value;
        // console.log(skillResult);
        // this.customerSkillList.push(this.form.get('storeSkillValue').value);
        // this.storeSkills.push(skillResult);
        // console.log(this.customerSkillList);
    // this.storeSkills.push(skillResult);N
    // console.log(this.skillVal);
   
    
    // skillResult.push(this.form.controls['skill'] as FormArray);
   
this.form.controls.regdate.patchValue(new Date());
   this.customer.saveData(this.form.value).subscribe((resultVal)=> {
     console.log(resultVal);
   
    // console.log(this.things);
    //  this.total=parseInt(this.form.controls.number1.value)+parseInt(this.form.controls.number2.value);
    //  this.form.controls.number3.value=this.total
    
    // const resultSkill = (this.form.controls['skillsUpdate'] as FormArray);
    // resultSkill.push(storeSkills);
    // console.log(storeSkills);
    // console.log(resultSkill);
  
    // console.log(this.skillVal);
    // console.log(this.otaCtrl);  
      this.reset();
   });
  }
reset(){
  this.form.reset();
}

}
