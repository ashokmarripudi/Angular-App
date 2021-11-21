import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms"

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {
  myForm:FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.myForm = formBuilder.group({
      name:["", [Validators.required,Validators.minLength(5),Validators.maxLength(12)]],
      pwd:["",[Validators.required,Validators.minLength(7),Validators.maxLength(15)]],
      email:["",[Validators.required,Validators.email]]
    })
  }

  ngOnInit(): void {
   // console.log(this.myForm)
  }
  submit()
  {
    console.log(this.myForm);
    console.log(this.myForm.value);
    console.log(this.myForm.get('name').value);
    this.myForm.reset();
  }

}
