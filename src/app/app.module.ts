import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { TrashComponent } from './src/app/trash/trash.component';
import { BranchComponent } from './src/app/branch/branch.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    TrashComponent,
    BranchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
