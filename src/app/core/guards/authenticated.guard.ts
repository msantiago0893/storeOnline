import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {

  constructor(
    private _sessionService: SessionService,
    private router: Router
  ) {}

  canActivate(): boolean {

    if (this._sessionService.isAuthenticated()) {
      return true;
    }


    this.router.navigateByUrl('/signin');
    return false;
  }
}


