import { Component, input } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
    usersList = input.required<UserModel[]>()
}
