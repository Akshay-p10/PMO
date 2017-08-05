import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: '', 	
    component:TimeSheetComponent,
    children: []
  }, {path: 'login',
   component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
