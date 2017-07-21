import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
