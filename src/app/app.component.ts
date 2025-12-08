import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Alibaba-Pro';

  /**
   *
   */
  constructor(private _toaster: ToastrService) {

  }

  ngOnInit() {
    // this._toaster.error("fasfs","asfsdaf");
  }
}
