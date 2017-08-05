import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';

const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent,
    children: [
      {
        path: '',
        outlet:'actionRoutes',
        component: ProjectListComponent
      },
      {
        path: 'time-sheet',
        outlet: 'actionRoutes',
        component: TimeSheetComponent
      }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
