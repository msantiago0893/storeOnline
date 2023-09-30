import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Storage } from 'src/app/memento/Storage';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): boolean  {

    const authorities = route.data.authorities;

    const user: any = Storage.getItem('user');

    if(authorities.includes(user.role)) {
      return true;
    }

    this.router.navigateByUrl('');

    return false;
  }

}


