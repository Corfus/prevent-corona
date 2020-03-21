import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.scss']
})
export class ImageButtonComponent {
  @Input() image: string;
  @Input() text: string;
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();

  onPointerDown(): void {
    this.clicked.emit();
  }
}
