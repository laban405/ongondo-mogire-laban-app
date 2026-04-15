import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  //to-do  move to env
  private readonly API_URL = '/api/users';

  private usersState = signal<UserModel[]>([]);


  users = computed(() => this.usersState());


  loadAll(query: string = '') {
    const url = query ? `${this.API_URL}?q=${query}` : this.API_URL;
    return this.http.get<UserModel[]>(url).pipe(
      tap((res) => this.usersState.set(res))
    );
  }


  create(user: Partial<UserModel>) {
    return this.http.post<UserModel>(this.API_URL, user).pipe(
      tap((newUser) => {
        this.usersState.update((prev) => [...prev, newUser]);
      })
    );
  }

  update(id: number, changes: Partial<UserModel>) {
    return this.http.put<UserModel>(`${this.API_URL}/${id}`, changes).pipe(
      tap(() => {
        this.usersState.update((prev) =>
          prev.map((u) => (u.id === id ? { ...u, ...changes } : u))
        );
      })
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(
      tap(() => {
        this.usersState.update((prev) => prev.filter((u) => u.id !== id));
      })
    );
  }
}