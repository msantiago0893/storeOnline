import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '@services/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { setError } from 'src/app/core/store/actions/app.action';
import { selectIsError, selectIsLoading } from 'src/app/core/store/selectors/app.selector';
import { Storage } from 'src/app/memento/Storage';
import { fadeAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass'],
  animations: [
    fadeAnimation
  ]
})
export class ManagerComponent implements OnInit {
  isSidebarOpen = true;
  user = '';
  isLoading = false;
  subscription: Subscription = new Subscription();
  isError$ = this.store.select(selectIsError);
  isLoading$ = this.store.select(selectIsLoading);


  constructor(
    private router: Router,
    private store: Store<any>,
    private cdr: ChangeDetectorRef,
    public auth: AuthService
  ) {
    this.user = Storage.getItem('user').name;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    this.changeOfRoute();

    this.store.select(selectIsLoading)
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
        this.cdr.detectChanges();   //TODO Call detectChanges to force the view to update
      });
  }

  changeOfRoute() {

    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.store.dispatch(setError({isError: false}));
      });
  }

  logout() {
    this.auth.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
