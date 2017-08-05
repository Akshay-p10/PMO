import { Component, OnInit } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import { ProjectListService } from './project-list.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  resp: any;
  
  constructor( private  projectListService : ProjectListService) { }
  passdata(){
 
  }
  ngOnInit() {
    this.projectListService.getProjectDetails()
    .then(data => {
         this.resp = data;
         console.log(data)
      },
      err =>{
        console.log(err);
      })
  }

}
