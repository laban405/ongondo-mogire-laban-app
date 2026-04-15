import { Component,  inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [MatDialogModule],
  template: `
    <div class="p-6">
      <h2 class="text-xl font-bold mb-2 text-gray-800">{{ data.title }}</h2>
      <p class="text-gray-600 mb-6">{{ data.message }}</p>
      <div class="flex justify-end gap-3">
        <button (click)="dialogRef.close(false)" 
          class="px-4 py-2 border hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button (click)="dialogRef.close(true)" 
          class="bg-red-600 text-white px-4 py-2  hover:bg-red-700 transition-colors shadow-sm">
          Delete
        </button>
      </div>
    </div>
  `
})
export class ConfirmDialogComponent {
  public dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  public data = inject<{ title: string; message: string }>(MAT_DIALOG_DATA);
}