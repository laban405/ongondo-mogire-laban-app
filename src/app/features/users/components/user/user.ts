import { Component, input, output } from '@angular/core';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  user = input.required<UserModel>();
  deleteUser = output<UserModel>();
  editUser = output<UserModel>();

  onDelete() {
    this.deleteUser.emit(this.user());
  }

  onEdit() {
    this.editUser.emit(this.user());
  }
}
