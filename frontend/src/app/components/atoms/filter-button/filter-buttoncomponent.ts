import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class ImageComponent {
  @Input() searchOptions: any[] = [];
  @Input() selectedCriteria: string = 'all';
  @Output() criteriaChanged = new EventEmitter<string>();

  selectCriteria(value: string): void {
    this.selectedCriteria = value;
    this.criteriaChanged.emit(this.selectedCriteria);
  }
}
