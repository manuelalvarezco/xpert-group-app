import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [],
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss',
})
export class SnackbarComponent {
  @Input() textLabel: string = '';
  @Input() textButton: string = '';
  @Output() aceptSnackbar = new EventEmitter();

  quitSnackbar() {
    this.aceptSnackbar.emit();
  }
}
