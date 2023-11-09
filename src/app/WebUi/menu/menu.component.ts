import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  sidebarVisible = true;
  isSubMenuActive: boolean = false;

  toggleSubMenu() {
    this.isSubMenuActive = !this.isSubMenuActive;
  }
}
