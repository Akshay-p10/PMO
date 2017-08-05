import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { DatePickerModule } from 'ng2-datepicker';
import { TimeSheetService } from './time-sheet/time-sheet.service';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

@NgModule({
  declarations: [
    AppComponent,
    TimeSheetComponent
  ],
  imports: [
    MultiselectDropdownModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DatePickerModule
  ],
  providers: [TimeSheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
