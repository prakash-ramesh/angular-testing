import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Testing';
  loadedMenu = 'recipe';

  onMenuChanged(menu: string) {
    this.loadedMenu = menu;
  }
}
