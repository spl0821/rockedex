import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import { favoritesReducer } from './reducers/favorites.reducer';
import { detailReducer } from './reducers/detail.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot({count: favoritesReducer, detail: detailReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
