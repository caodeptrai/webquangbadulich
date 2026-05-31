import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { ConfirmDialogService } from '../../services/confirm-dialog.service';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  private readonly confirmDialog = inject(ConfirmDialogService);
  readonly state$ = this.confirmDialog.state$;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.confirmDialog.cancel();
  }

  confirm(): void {
    this.confirmDialog.accept();
  }

  cancel(): void {
    this.confirmDialog.cancel();
  }
}
