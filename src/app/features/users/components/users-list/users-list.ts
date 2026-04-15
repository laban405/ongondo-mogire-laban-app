import { Component, input, output } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { User } from '../user/user';

@Component({
  selector: 'app-users-list',
  imports: [User],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersList {
  usersList = input.required<UserModel[]>();
  deleteUser = output<UserModel>();
  editUser = output<UserModel>();

  onDelete(user:UserModel) {
    this.deleteUser.emit(user);
  }

  onEdit(user:UserModel) {
    this.editUser.emit(user);
  }
}
