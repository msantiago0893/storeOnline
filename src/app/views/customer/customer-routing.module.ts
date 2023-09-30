import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent,
    // children: [
    //   { path: ROUTER.DASHBOARD, component: DashboardComponent },
    //   { path: '**', redirectTo: ROUTER.DASHBOARD }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
