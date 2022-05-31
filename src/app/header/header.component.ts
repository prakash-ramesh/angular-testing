import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selectedMenu = new EventEmitter<string>();
  
  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  onSelect(menu: string) {
    this.selectedMenu.emit(menu);
  }
}
