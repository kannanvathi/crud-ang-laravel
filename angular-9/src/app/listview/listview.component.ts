
import {Component, OnInit, ViewChild, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { CrudService } from '../crud.service';
import { Router, ActivatedRoute } from '@angular/router'
import { template } from '../template';
import { MessageService } from '../message.service';
/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})

export class ListviewComponent implements OnInit {
  public getData;
  public getData2;
   public editElement;
   public serverElement;
  displayedColumns: string[] = ['name', 'email', 'password', 'actions'];
  dataSource;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private crudSer : CrudService, private router:Router, private actRoute:ActivatedRoute, private msgSer:MessageService) { }
  ngOnInit() {
    this.getData = this.crudSer.ELEMENT_DATA;
    this.crudSer.getElementData().subscribe(data => this.getData2 = data);
    this.msgSer.getMessage().subscribe((data)=>{
      this.getElementDataServer();
    })
    this.getElementDataServer();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
  }
  editProfile(element){
    this.editElement =element;
    this.router.navigate(['/update', element.id]);
  }
  deleteProfile(element){
    console.log(element.id);
    this.crudSer.deleteElementData(element.id).subscribe((data) => {
      console.log(data);
      this.getElementDataServer();
    });
    
    
  }
  removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}
  getElementDataServer(){
    this.crudSer.getElementDataServer().subscribe((all) => {
      this.serverElement = all;
      console.log(this.serverElement);
  });
  }
}



