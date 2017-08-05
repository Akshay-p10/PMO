import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import { TimeSheetService } from './time-sheet.service';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
	date:any = {};
	hours:any = {};
	activityOptionModel : number[];
	resp:any;
	activity_len = null;
	modalDate : any;
	activityArray : any;
	totalHours:Number = 0;
	activity = [];
	obj: any = {"pmoTime":"",
				"employeeId":"4",
				"pmoData": {
					"totalHours": null,
					"project":"1"
					},
				};

names=['1','2','3','4','5','6','7','8']
  options: DatePickerOptions;
  
  constructor(private timeSheetService : TimeSheetService)
  {
   this.options = new DatePickerOptions();
    }
      ngOnInit() {

  	this.getSheetData();
  	this.getActivity();  
  }
   getSheetData() {
   	 this.timeSheetService.getTimesheetData()
  		.subscribe(data => {
			this.resp = data;
 			// this.getTime(this.resp);
		},
		error =>{
	});
   }

   onChange() {
        console.log(this.activityOptionModel, this.activity, "jk");
    }

   getDetails(data) {
   	console.log(data)
   	this.modalDate = data.pmoTime;
   	// console.log(this.modalDate);
   }

   getActivity() {
   	 this.timeSheetService.getActivityData()
  		.subscribe(data => {
			this.createActivityData(data)
				// console.log(data, "data");
				this.activity = data
			},
			error =>{
			});
   }

   createActivityData(data) {
   	for(let item of data[0].projectActivities) {
   		this.activity.push({'id':item.activityId.activityId, 'name' :item.activityId.activityName})
   	}
   	console.log(this.activity,"after filling");
   }

   console(){
   	console.log(this.activity,"console");
   }



onclick(data){
	data.pmoTime = data.pmoTime.formatted;
	console.log(data);
	this.timeSheetService.createTimeSheet(data)
	.subscribe(data => this.getSheetData());
}

}

