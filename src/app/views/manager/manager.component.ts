import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { setError } from 'src/app/core/store/actions/app.action';
import { selectIsError, selectIsLoading } from 'src/app/core/store/selectors/app.selector';
import { Storage } from 'src/app/memento/Storage';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
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
    private cdr: ChangeDetectorRef
  ) {
    this.user = Storage.getItem('user').name;
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {

    this.changeOfRoute();

    this.store.select(selectIsLoading)
      .subscribe((isLoading: boolean) => {
        this.isLoading = isLoading;
        this.updateView();
      });
  }

  private updateView() {
    //TODO Call detectChanges to force the view to update
    this.cdr.detectChanges();
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
