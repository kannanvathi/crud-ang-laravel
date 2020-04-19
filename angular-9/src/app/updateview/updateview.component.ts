import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-updateview',
  templateUrl: './updateview.component.html',
  styleUrls: ['./updateview.component.css']
})
export class UpdateviewComponent implements OnInit {
  public editElement;
  public elements;
  public id;
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  constructor(private router:Router, private actRouter:ActivatedRoute, private crudSer:CrudService) { }
  
  ngOnInit(): void {
     this.id = this.actRouter.snapshot.paramMap.get('id');
    this.crudSer.getElementDataServer().subscribe((data) => {
        this.elements = data;
        let dataObj = {};

        for (let i=0; i<data.length; i++) {
          dataObj[data[i].id] = data[i];
        }
        this.editElement = dataObj[this.id];
        console.log(data);
    });
    console.log(this.id);
  }
  
  update(){
    console.log('click')
    console.log(this.editElement);
    this.crudSer.updateElementData(this.editElement).subscribe((data) =>{
      console.log('updated');
      this.router.navigate([''], {relativeTo:this.actRouter});
    })
  }
  closeView(){
    this.router.navigate([''], {relativeTo:this.actRouter});
  }

}
