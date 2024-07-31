import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-player',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-player.component.html',
  styleUrl: './dialog-player.component.scss',
})
export class DialogPlayerComponent {
  name: string = '';

  constructor(private dialogRef: MatDialogRef<DialogPlayerComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}