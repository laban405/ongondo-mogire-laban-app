import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/users.service';
import { UserModel } from '../../models/user.model';


@Component({
  selector: 'app-user-edit-dialog',
  standalone: true,
  imports: [MatDialogModule, ReactiveFormsModule],
  template: `
    <div class="p-6">
      <h2 class="text-xl font-bold mb-4">Edit User</h2>
      
      <form [formGroup]="editForm" (ngSubmit)="onSave()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Name</label>
          <input formControlName="name" type="text" 
            class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm" />
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input formControlName="email" type="email" 
            class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm" />
        </div>

        <div class="flex justify-end gap-3">
          <button type="button" (click)="dialogRef.close()" 
            class="px-4 py-2 border rounded-none hover:bg-gray-50">Cancel</button>
          <button type="submit" [disabled]="editForm.invalid"
            class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors rounded-none w-[150px] h-[48px] cursor-pointer">
            Update
          </button>
        </div>
      </form>
    </div>
  `
})
export class UserEditDialogComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private snackBar = inject(MatSnackBar);
  
  public dialogRef = inject(MatDialogRef<UserEditDialogComponent>);
  public data = inject<UserModel>(MAT_DIALOG_DATA);

  editForm = this.fb.group({
    name: [this.data.name, [Validators.required]],
    email: [this.data.email, [Validators.required, Validators.email]]
  });

  onSave() {
    if (this.editForm.valid) {
      this.userService.update(this.data.id, this.editForm.value as Partial<UserModel>).subscribe({
        next: () => {
          this.snackBar.open('User updated successfully!', 'OK', { duration: 3000 ,});
          this.dialogRef.close(true);
        },
        error: () => this.snackBar.open('Update failed', 'Close', { duration: 3000,})
      });
    }
  }
}