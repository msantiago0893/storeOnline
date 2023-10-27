import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(
    private router: Router
  ) { }

  isAuthenticated() {
    return !!localStorage.getItem('accessToken');
  }

  isManager() {
    return localStorage.getItem('user') === 'admin';
  }
}
