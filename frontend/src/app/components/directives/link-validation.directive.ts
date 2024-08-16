import { Directive, Input, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appLinkValidation]'
})
export class LinkValidationDirective implements OnChanges {
  // Default regular expression (RegExp) pattern used to validate URLs.
  private validUrlPattern: RegExp = /^(ftp|http|https):\/\/[^ "]+$/;

  @Input('appLinkValidation') pattern?: string;

  constructor(private control: NgControl) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pattern']) {
      this.updatePattern();
    }
  }

  // Updates the validation pattern with the custom pattern provided by the user.
  // If the provided pattern is invalid, it falls back to the default pattern.
  private updatePattern() {
    if (this.pattern) {
      try {
        // Updates the validUrlPattern with the custom pattern provided by the user.
        this.validUrlPattern = new RegExp(this.pattern);
      } catch (e) {
        // If the provided pattern is invalid, it falls back to the default pattern.
        console.error('Invalid regular expression pattern:', this.pattern);
        this.validUrlPattern = /^(ftp|http|https):\/\/[^ "]+$/; 
      }
    }
  }

  @HostListener('blur') onBlur() {
    const value = this.control.control?.value;
    // If the value is not a valid URL, sets an error on the Angular Form control.
    if (value && !this.validUrlPattern.test(value)) {
      this.control.control?.setErrors({ invalidUrl: true });
    } else {
      this.control.control?.setErrors(null);
    }
  }
}
