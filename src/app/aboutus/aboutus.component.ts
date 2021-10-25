import { TextValidator } from './../validator/validator.validation';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DbcoursesService } from '../dbcourses.service';

@Component({
  selector: 'aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent {
  companyName = 'Rawad Kashwar';
  companyAdress = 'Abu Dhabi';
  title="";

  forreact= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    pass: new FormControl('',[Validators.minLength(8),TextValidator.noSpaces]),
  });

  get email(){
    return this.forreact.get('email');
  }
  get pass(){
    return this.forreact.get('pass');
  }



  courses: string[] ;
  constructor(dbs:DbcoursesService){
    this.courses=dbs.getAllCourses();
  }

  deletecourse(course: any) {
    var index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  addcourse(addcourse: any) {
    this.courses.push(addcourse.value);
    addcourse.value="";
  }
  logng(ac:any){
    console.log(ac);
  }
  submit(myform:NgForm){
    console.log(myform);
    console.log(myform.value.adcourse);

    let str="rawadkashwar";
    console.log(str.indexOf(' '));
  }

}
