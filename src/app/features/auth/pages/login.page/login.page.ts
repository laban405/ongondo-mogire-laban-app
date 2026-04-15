import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back</h2>

        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2">Email</label>
            <input
              formControlName="email"
              type="email"
              class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
              [class.border-red-500]="isFieldInvalid('email')"
            />
            @if (isFieldInvalid('email')) {
              <p class="text-red-500 text-xs mt-1">Please enter a valid email.</p>
            }
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 mb-2">Password</label>
            <input
              formControlName="password"
              type="password"
              class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
              [class.border-red-500]="isFieldInvalid('password')"
            />
          </div>

          @if (errorMessage()) {
            <p class="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm">{{ errorMessage() }}</p>
          }

          <button
            type="submit"
            [disabled]="loginForm.invalid"
            class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors rounded-none w-full h-[48px] cursor-pointer"
          >
            Log In
          </button>

          <div class="my-4">
            <p class="mb-2">Test Credentials</p>
            <p>Email: admin@test.com</p>
            <p>Password: 1234</p>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class LoginPage {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal('');

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  isFieldInvalid(field: string): boolean {
    const control = this.loginForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value as any).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.errorMessage.set(err.error?.message || 'Login failed');
        },
      });
    }
  }
}
