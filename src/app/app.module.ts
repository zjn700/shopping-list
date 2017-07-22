import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing.module';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { TrashComponent } from './trash/trash.component';
import { BranchComponent } from './branch/branch.component';
import { SortedByRiskComponent } from './sorted-by-risk/sorted-by-risk.component';
import { MainPageComponent } from './main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    TrashComponent,
    BranchComponent,
    SortedByRiskComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
