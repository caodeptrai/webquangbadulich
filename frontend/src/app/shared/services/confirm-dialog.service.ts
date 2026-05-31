import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ConfirmDialogConfig {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  icon?: string;
}

interface ConfirmDialogState extends Required<ConfirmDialogConfig> {
  open: boolean;
}

const DEFAULT_STATE: ConfirmDialogState = {
  open: false,
  title: 'Xác nhận xoá',
  message: '',
  confirmText: 'Xoá',
  cancelText: 'Huỷ',
  icon: 'delete',
};

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private resolver?: (confirmed: boolean) => void;
  private readonly stateSubject = new BehaviorSubject<ConfirmDialogState>(DEFAULT_STATE);

  readonly state$ = this.stateSubject.asObservable();

  confirm(config: ConfirmDialogConfig): Promise<boolean> {
    this.resolver?.(false);

    this.stateSubject.next({
      ...DEFAULT_STATE,
      ...config,
      open: true,
    });

    return new Promise<boolean>((resolve) => {
      this.resolver = resolve;
    });
  }

  accept(): void {
    this.close(true);
  }

  cancel(): void {
    this.close(false);
  }

  private close(confirmed: boolean): void {
    if (!this.stateSubject.value.open) return;

    this.stateSubject.next({ ...this.stateSubject.value, open: false });
    this.resolver?.(confirmed);
    this.resolver = undefined;
  }
}
