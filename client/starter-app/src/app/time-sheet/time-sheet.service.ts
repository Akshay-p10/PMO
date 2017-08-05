import { Injectable } from '@angular/core';
import {  Http,Response,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeSheetService {
 private baseUrl : string = 'http://10.0.1.196/api/employees/4/timeSheets';
 private baseActivityUrl : string ='http://10.0.1.196/api/projects/1';
 private postBaseUrl : string ='';
    constructor(private http:Http){}

    getTimesheetData(){
     return this.http.get(this.baseUrl)
        .map((response:Response) => {console.log(response.json()); return response.json();});
    }

    getActivityData(){
     return this.http.get(this.baseActivityUrl)
        .map((response:Response) => {console.log(response.json());
        	let arr = [];
        	let data = response.json();
        	console.log(data)
        	for(let item of data[0].projectActivities){
        		let obj = {
        			"id": item.activityId.activityId,
        			"name": item.activityId.activityName
        		}
        		arr.push(obj);
        	console.log("arr", arr,obj)
        	}
        	return arr;
		});
    }

    createTimeSheet(obj) {
    	return this.http.post('http://10.0.1.196/api/timeSheet', obj)
    	.map(res => {console.log(res.json());return res.json();});
    }
    
    //  postTimesheetData(data){
    //  return this.http.post(this.postBaseUrl + data)
    //     .map((response:Response) => response.json());
    // }
    
}

