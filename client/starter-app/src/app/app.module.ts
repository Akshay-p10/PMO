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
import { LoginComponent } from './login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProjectListComponent } from './project-list/project-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProjectListService } from './project-list/project-list.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreService } from './store.service';

@NgModule({
  declarations: [
    AppComponent,
    TimeSheetComponent,
    LoginComponent,
    ProjectListComponent,
    TopBarComponent,
    DashboardComponent
  ],
  imports: [
    MultiselectDropdownModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DatePickerModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ProjectListService, TimeSheetService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
