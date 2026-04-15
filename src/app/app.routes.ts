import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';
import { LoginPage } from './features/auth/pages/login.page/login.page';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('./features/users/users.routes').then((m) => m.USERS_ROUTES),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginPage,
  },
];
