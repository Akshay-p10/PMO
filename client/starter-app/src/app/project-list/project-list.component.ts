import { Component, OnInit } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import { ProjectListService } from './project-list.service';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  resp: any;
  error: any;
  errormsg=true;
  empId = null;
  
  constructor(
    private projectListService : ProjectListService,
    private storeService: StoreService,
    private route: Router
  ) { }
  
  passData(id){
    this.storeService.setProjId(id);
    console.log(id);
    
    this.route.navigateByUrl("/dashboard/(actionRoutes:time-sheet)");
  }

  getProjects(id) {
     this.projectListService.getProjectDetails(id)
    .then(data => {
         this.resp = data;
         console.log(data)
      },
      err =>{ 
        this.error = err;
        if(this.error == []){
         this.errormsg=false;
        }
        console.log(err);
      });
  }
  
  
  ngOnInit() {
   this.empId = this.storeService.getEmpId();
   this.getProjects(this.empId);
  }

}
