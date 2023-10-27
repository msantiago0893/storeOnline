import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTER } from './shared/constants/routers';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { RolGuard } from './core/guards/role.guard';
import { ACL } from './security/acl';

const routes: Routes = [
  {
    path: ROUTER.AUTH,
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    canActivate: [AuthenticatedGuard],
    data: {
      authorities: [
        'admin',
        'customer'
      ]
    },
    children: [
      {
        path: '',
        redirectTo: ACL.getDefaultRedirectPath(), pathMatch: 'full'
      },
      {
        path:ROUTER.MANAGER,
        canActivate: [RolGuard],
        loadChildren: () => import('./views/manager/manager.module').then(m => m.ManagerModule),
        data: {
          authorities: ['admin']
        }
      },
      {
        path:ROUTER.CUSTOMER,
        canActivate: [RolGuard],
        loadChildren: () => import('./views/customer/customer.module').then(m => m.CustomerModule),
        data: {
          authorities: ['customer']
        }
      }
    ]

  },
  {
    path: '',
    redirectTo: '',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
