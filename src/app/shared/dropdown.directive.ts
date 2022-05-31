import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @Output() toggle = new EventEmitter();

  @HostListener('click') toggleClick() {
    this.toggle.emit();
  }
}
