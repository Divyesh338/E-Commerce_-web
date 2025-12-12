import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from 'src/app/shared/services/http.service';
import { Global } from 'src/app/shared/utility/global';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userImage: string = 'assets/images/user.webp';
  fullName: string = '';
  emailId: string = '';
  firstName: string = '';
  lastName: string = '';
  addedImagePath: string = 'assets/images/noimage.png';
  fileToUpload: File | null = null;
  userDetails: any = {};

  @ViewChild('file') elFile!: ElementRef;

  constructor(
    private _http: HttpService,
    private _toaster: ToastrService,
  ) { }
  
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

    this.userImage = (!this.userDetails.imagePath)
      ? 'assets/images/user.webp'
      : Global.BASE_USERS_IMAGES_PATH + this.userDetails.imagePath;

    this.firstName = this.userDetails.firstName;
    this.lastName = this.userDetails.lastName;
    this.emailId = this.userDetails.email;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  upload(files: FileList | null) {
    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];

    if (!file.type.match(/image\/*/)) {
      this._toaster.error("Please Upload a Valid Image!", "Profile Image");
      this.resetImageInput();
      return;
    }

    this.fileToUpload = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.addedImagePath = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  changePic() {
    if (!this.fileToUpload) {
      this._toaster.error('Please upload an image', "Profile Image");
      return;
    }

    const formData = new FormData();
    formData.append('Id', this.userDetails.id);
    formData.append('Image', this.fileToUpload, this.fileToUpload.name);

    this._http.postImage(`${environment.BASE_API_PATH}UserMaster/UpdateProfile/`, formData)
      .subscribe(res => {
        if (res.isSuccess) {

          this._toaster.success("Profile Image Updated Successfully!", "Profile");

          // Update UI instantly
          this.userImage = this.addedImagePath;
          localStorage.setItem("userDetails", JSON.stringify(this.userDetails));
          Global.profileImage$.next(this.userImage);
          // Clear fields
          this.resetImageInput();

        } else {
          this._toaster.error(res.errors[0], "Profile");
        }
      });
  }

  tabChange() {
    this.resetImageInput();
  }

  private resetImageInput() {
    this.elFile.nativeElement.value = '';
    this.addedImagePath = 'assets/images/noimage.png';
    this.fileToUpload = null;
  }

}
