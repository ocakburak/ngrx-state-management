import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LayoutsComponent } from './component/layouts/layouts.component';
import { NavbarComponent } from './component/layouts/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { Reducers } from './state/reducer';
import { ProductAddComponent } from './component/home/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    HomeComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(Reducers.basket),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
