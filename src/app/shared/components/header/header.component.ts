import { Component } from '@angular/core';
import { CollaspeService } from '../../services/collaspe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userImage: string = "assets/images/user.webp";

  constructor(public _collaspeService: CollaspeService) { }

  ngOnInit(): void {
    let userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    // this.userImage = (userDetails.imagePath == "" || userDetails.imagePath == null) ? "assets/images/user.png" :
    //   Global.BASE_USERS_IMAGES_PATH + userDetails.imagePath;
  }

  collaspeSidebar() {
    this._collaspeService.openSidebar = !this._collaspeService.openSidebar;
  }
}
