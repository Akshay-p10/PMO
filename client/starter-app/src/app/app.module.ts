import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
//import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { LoginComponent } from './login/login.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

=======
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { DatePickerModule } from 'ng2-datepicker';
>>>>>>> 8b0a1869290c7a120c6e4b972c95fbad09b7412b

@NgModule({
  declarations: [
    AppComponent,
    //TimeSheetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
<<<<<<< HEAD
    BsDropdownModule.forRoot()
=======
    DatePickerModule
>>>>>>> 8b0a1869290c7a120c6e4b972c95fbad09b7412b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
