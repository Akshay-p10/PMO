import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TimeSheetComponent } from './time-sheet/time-sheet.component';
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
    //TimeSheetComponent,
    LoginComponent,
    ProjectListComponent,
    TopBarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ProjectListService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
