import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AppComponent } from './app.component';
//import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
=======
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: '', 	
    component:TimeSheetComponent,
    children: []
  }
>>>>>>> 8b0a1869290c7a120c6e4b972c95fbad09b7412b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
