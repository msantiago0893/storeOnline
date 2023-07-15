import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER } from './shared/constants/routers';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  },
  {
    path: 'api',
    loadChildren: () => import('./views/apis/apis.module').then(m => m.ApisModule)
  },
  {
    path: ROUTER.AUTH,
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: ROUTER.MANAGER,
    loadChildren: () => import('./views/manager/manager.module').then(m => m.ManagerModule)
  },
  { path: '**', redirectTo: ROUTER.AUTH }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
