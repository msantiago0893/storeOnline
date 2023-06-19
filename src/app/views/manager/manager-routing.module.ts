import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTER } from 'src/app/shared/constants/routers';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerComponent } from './manager.component';


const routes: Routes = [
  {
    path: '', component: ManagerComponent,
    children: [
      { path: ROUTER.DASHBOARD, component: DashboardComponent },
      { path: '**', redirectTo: ROUTER.DASHBOARD }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ManagerRoutingModule { }
