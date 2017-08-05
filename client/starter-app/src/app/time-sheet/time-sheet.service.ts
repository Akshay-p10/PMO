import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeSheetService {
 private baseUrl : string = 'http://10.0.1.196/api/employees/';
 private baseActivityUrl : string ='http://10.0.1.196/api/projects/';
 private postBaseUrl : string ='';
    constructor(private http:Http){}

    getTimesheetData(id){
     return this.http.get(this.baseUrl+id+'/timeSheets')
        .map((response:Response) => response.json());
    }

    getActivityData(id){
     return this.http.get(this.baseActivityUrl+id)
        .map((response:Response) => {
        	let arr = [];
        	let data = response.json();
        	for(let item of data[0].projectActivities){
        		let obj = {
        			"id": item.activityId.activityId,
        			"name": item.activityId.activityName
        		}
        		arr.push(obj);
        	}
        	return arr;
		});
    }

    createTimeSheet(obj) {
    	return this.http.post('http://10.0.1.196/api/timeSheet', obj)
    	.map(res => {console.log(res.json()); return res.json();});
    }
    
}

