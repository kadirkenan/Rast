import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() icon!: string;
  @Input() class!: string;
  @Input() style: { [key: string]: string } = {};
  @Input() type: string = 'button';
  @Input() label!: string;
  @Output() click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }


}
