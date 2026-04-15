import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/users.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UsersList } from '../../components/users-list/users-list';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserModel } from '../../models/user.model';
import { ConfirmDialogComponent } from '../../../../shared/components/confirm-dialog/confirm-dialog';
import { UserEditDialogComponent } from '../../components/user-edit-dialog/user-edit-dialog';
import { UserSearch } from '../../components/user-search/user-search';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-users.page',
  imports: [UsersList, RouterLink,UserSearch],
  templateUrl: './users.page.html',
  styleUrl: './users.page.css',
})
export class UsersPage implements OnInit {
  private destroyRef = inject(DestroyRef);
  private dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);
 private authService = inject(AuthService);
  private userService = inject(UserService);

  users = this.userService.users;

  ngOnInit(): void {
    this.userService.loadAll().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  onDelete(user: UserModel) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        title: 'Delete User',
        message: `Are you sure you want to delete ${user.name}? This action cannot be undone.`,
      },
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.userService.delete(user.id).subscribe({
          next: () => {
            this.snackBar.open('User deleted successfully', 'OK', {
              duration: 3000,
              panelClass: ['bg-primary text-white'],
            });
          },
          error: () => this.snackBar.open('Error deleting user', 'Close',{panelClass: ['bg-red-700 text-white']}),
        });
      }
    });
  }

  onEdit(user: UserModel) {
    const dialogRef = this.dialog.open(UserEditDialogComponent, {
      width: '400px',
      data: user,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
      }
    });
  }

  logOut(){
    this.authService.logout()
  }
}
