import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { TimeSheetService } from './time-sheet.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
	date:any = {};
	hours:any = {};
	optionsModel: number[];
	resp:any;
	activity_len = null;
	projId = "";
	empId = "";
	modalDate : any;
	activityArray : any;
	totalHours:Number = 0;
	activity :IMultiSelectOption[] = [];
	obj: any = {"pmoTime":"",
				"employeeId": "",
				"pmoData": {
					"totalHours": null,
					"project":"",
					"noOfActivities": null
					}
					
				};

names=['1','2','3','4','5','6','7','8']
  options: DatePickerOptions;
  
  constructor(
  	private timeSheetService : TimeSheetService,
  	private storeService: StoreService)
  {
   this.options = new DatePickerOptions();
  }
  
  ngOnInit() {
  	this.projId = this.storeService.getProjId();
  	this.empId = this.storeService.getEmpId();
  	this.getSheetData();
  	this.getActivity();  
  }
   getSheetData() {
   	 this.timeSheetService.getTimesheetData(this.empId)
  		.subscribe(data => {
			this.resp = data;
			console.log(this.resp,"resp");
 			// this.getTime(this.resp);
		},
		error =>{
	});
   }

    onChange() {
        this.obj.pmoData.noOfActivities = this.optionsModel.length;
        console.log(this.obj.pmoData.noOfActivities);
    }

   getDetails(data) {
   	this.modalDate = data.pmoTime;
   	// console.log(this.modalDate);
   }

   getActivity() {
   	 this.timeSheetService.getActivityData(this.projId)
  		.subscribe(data => {
			this.createActivityData(data)
				// console.log(data, "data");
				this.activity = data
			},
			error =>{
			});
   }

   createActivityData(data) 
   {
   	console.log(data,"create")
   	for(let item of data) {
   		this.activity.push({'id':data.id, 'name' :data.name})
   	}
   	console.log(this.activity,"after filling");
   }

   console(){
   	console.log(this.activity,"console");
   }



onclick(data){
    data.employeeId = this.empId.toString();
    data.pmoData.project = this.projId.toString();
	data.pmoTime = data.pmoTime.formatted;
	console.log(data);
	this.timeSheetService.createTimeSheet(data)
	.subscribe(data => this.getSheetData());
}

}

