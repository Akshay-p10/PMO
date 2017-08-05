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

@NgModule({
  declarations: [
    AppComponent,
    //TimeSheetComponent,
    LoginComponent,
    ProjectListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ProjectListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
