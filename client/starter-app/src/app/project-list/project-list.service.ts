import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class ProjectListService {

  constructor(private http: Http) { }

   private apiURL = 'http://10.0.1.196/api/employees/';

   getProjectDetails(id){
       return this.http.get(this.apiURL+id+'/projects')
       .toPromise()
        .then((response:Response) => {return response.json()});
   }


}
