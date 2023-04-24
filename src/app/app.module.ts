import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { appReducer } from './store/app.state';
import { ProductComponent } from './products/product/product.component';
import { productReducer } from './products/state/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './products/state/product.effects';
@NgModule({
  declarations: [
    AppComponent,
    RxjsComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    StoreModule.forRoot({product : productReducer}),
    EffectsModule.forRoot([ProductEffect]),
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
