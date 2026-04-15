import { Component, inject,  signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, finalize, tap } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="relative max-w-md">
      <input
        [formControl]="searchControl"
        type="text"
        placeholder="Search users..."
        class="w-full px-4 py-2 border border-secondary rounded-none focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
      />
      
      @if (isLoading()) {
        <div class="absolute right-3 top-2.5">
          <div class="animate-spin h-5 w-5 border-2 border-green-500 border-t-transparent rounded-full"></div>
        </div>
      }
    </div>
  `
})
export class UserSearch {
  private userService = inject(UserService);
  
  searchControl = new FormControl('');
  isLoading = signal(false);

  constructor() {
    this.searchControl.valueChanges.pipe(
      debounceTime(400),         
      distinctUntilChanged(),    
      tap(() => this.isLoading.set(true)),
      switchMap(query =>        
        this.userService.loadAll(query || '').pipe(
          finalize(() => this.isLoading.set(false))
        )
      ),
      takeUntilDestroyed()     
    ).subscribe();
  }
}