
import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);
  private readonly AUTH_URL = '/api/auth/login';

  private _token = signal<string | null>(localStorage.getItem('accessToken'));

  token = computed(() => this._token());
  isAuthenticated = computed(() => !!this._token());

  login(credentials: { email?: string; password?: string }) {
    return this.http.post<{ access_token: string }>(this.AUTH_URL, credentials).pipe(
      tap((res) => {
        localStorage.setItem('accessToken', res.access_token);
        this._token.set(res.access_token);
      })
    );
  }

  logout() {
    localStorage.removeItem('accessToken');
    this._token.set(null);
    this.router.navigate(['/login']);
  }
}