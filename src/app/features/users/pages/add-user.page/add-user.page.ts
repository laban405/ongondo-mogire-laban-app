import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/users.service';
import { AddUserDto } from '../../models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatSnackBarModule, RouterLink],
  template: `
    <div class="max-w-md mx-auto mt-10 p-6 bg-whitel shadow-md border">
      <h2 class="text-2xl font-bold mb-6 text-gray-800">Add New User</h2>

      <form [formGroup]="userForm" (ngSubmit)="onSubmit()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            formControlName="name"
            type="text"
            class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
            [class.border-red-500]="isValid('name')"
          />
          @if (isValid('name')) {
            <span class="text-xs text-red-500">Name is required (min 3 chars).</span>
          }
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            formControlName="email"
            type="email"
            class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
            [class.border-red-500]="isValid('email')"
          />
          @if (isValid('email')) {
            <span class="text-xs text-red-500">Please enter a valid email.</span>
          }
        </div>

        <div class="flex gap-4">
          <button
            type="button"
            routerLink="/users"
            class="px-4 py-2 border rounded-none hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            [disabled]="userForm.invalid"
            class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors rounded-none w-[150px] h-[48px] cursor-pointer"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  `,
})
export class AddUserComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  userForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  isValid(field: string) {
    const control = this.userForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.userService.create(this.userForm.value as AddUserDto).subscribe({
        next: () => {
          this.snackBar.open('User created successfully! 🎉', 'Close', {
            duration: 3000,
            panelClass: ['bg-primary text-white'],
          });
          this.router.navigate(['/users']);
        },
        error: (err) => {
          this.snackBar.open('Error saving user. Please try again.', 'Close', {
            duration: 5000,
            panelClass: ['bg-red-700 text-white'],
          });
        },
      });
    }
  }
}
