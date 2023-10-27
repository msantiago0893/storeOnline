import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './core/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './core/store/effects/user.effects';
import { AuthEffects } from './core/store/effects/auth.effects';
import { CategoryEffects } from './core/store/effects/category.effects';
import { HttpErrorInterceptor } from './core/interceptors/error.interceptor';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { SpinnerInterceptor } from './core/interceptors/Spinner.interceptor';
import { ProductEffects } from './core/store/effects/product.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      ROOT_REDUCERS
    ),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([
      AuthEffects,
      UserEffects,
      CategoryEffects,
      ProductEffects
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
