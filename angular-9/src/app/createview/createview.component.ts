import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { template } from '../template';
@Component({
  selector: 'app-createview',
  templateUrl: './createview.component.html',
  styleUrls: ['./createview.component.css']
})
export class CreateviewComponent implements OnInit {
  public form;
  public name:string;
  public Email:any;
  public password:any;
  public push;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private crudSer:CrudService, private actRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    /*this.form = form.value;
    this.form.id = this.crudSer.ELEMENT_DATA.length;
    if(form.value.name != '' && form.value.email != '' && form.value.password != ''){
      this.push = this.crudSer.ELEMENT_DATA.push(this.form);
      console.log(this.form);
      form.reset();
    }
    else{
      form.value.focus();
    }*/
    this.crudSer.addElementData(this.name,this.Email, this.password).subscribe((data)=>{
      console.log("element added");
    });
    form.reset();
  }
  navigateToList(){
    this.router.navigate([''], { relativeTo: this.actRoute })
  }
}
