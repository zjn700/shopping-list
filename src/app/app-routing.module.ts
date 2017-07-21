import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component'
//import { AUTH_ROUTES } from './users/auth.routes';

const APP_ROUTES: Routes = [
        //{ path: '', redirectTo: '/', pathMatch: 'full' },
        { path: 'shopping', component: ShoppingListComponent }
        //{ path: 'auth', component: AuthComponent, children: AUTH_ROUTES },
        //{ path: '**', redirectTo: '/', pathMatch: 'full' }

    ]
export const routing = RouterModule.forRoot(APP_ROUTES)