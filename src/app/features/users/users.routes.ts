import { Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user.page/add-user.page';
import { UsersPage } from './pages/users.page/users.page';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersPage,
  },
  {
    path: 'add',
    component: AddUserComponent,
  },
];
