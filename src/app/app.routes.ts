import { Routes } from '@angular/router';
import { authGuard } from './features/auth/guards/auth.guard';
import { LoginPage } from './features/auth/pages/login.page/login.page';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: 'users',
    loadComponent: () =>
      import('./features/users/pages/users.page/users.page').then((m) => m.UsersPage),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginPage,
  },
];
