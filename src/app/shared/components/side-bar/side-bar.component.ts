import { Component } from '@angular/core';
import { Global } from '../../utility/global';
import { MenuService } from '../../services/menu.service';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  userImage: string = "assets/images/user.webp";
  logoImage: string = "assets/images/logo.jpg";
  fullName: string = '';
  email: string = '';
  menuItems: Menu[] = [];

  constructor(private _menuService: MenuService) {
  }

  ngOnInit() {
    let userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    this.fullName = `${userDetails.firstName} ${userDetails.lastName}`;
    this.email = `${userDetails.email}`;
    this.userImage = ((userDetails.imagePath == "" || userDetails.imagePath == null) ? "assets/images/user.webp" : Global.BASE_USERS_IMAGES_PATH + userDetails.imagePath);
    this.menuItems = this._menuService.MENUITEMS
  }

  toToggleNavActive(menuItem: Menu) {
    menuItem.active = !menuItem.active;
  }
}
