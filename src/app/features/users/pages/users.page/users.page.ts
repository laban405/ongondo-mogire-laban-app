import { Component, inject } from '@angular/core';
import { UserService } from '../../services/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersList } from '../../components/users-list/users-list';

//to-do path alias

@Component({
  selector: 'app-users.page',
  imports: [UsersList],
  templateUrl: './users.page.html',
  styleUrl: './users.page.css',
})
export class UsersPage {

private userService = inject(UserService);

  users = toSignal(this.userService.loadAll(), {
    initialValue: [],
  });




}
