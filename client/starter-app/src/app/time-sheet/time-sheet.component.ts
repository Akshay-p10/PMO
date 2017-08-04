import { Component, OnInit } from '@angular/core';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.scss']
})
export class TimeSheetComponent implements OnInit {
	date:any = {};
	hours:any = {};
 name: String = "Ringo";
 names: String[] = ["1", "2", "3", "4" ,"5","6","7","8"]
  options: DatePickerOptions;
  constructor() {
   this.options = new DatePickerOptions();
    }

  ngOnInit() {


  
  }


onclick(){
	console.log(this.date,this.hours,"ng-modal");
}
}
