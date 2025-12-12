import { BehaviorSubject } from "rxjs";

export class Global {
  public static BASE_API_PATH = 'https://sahosoftweb.com/api/';
  public static BASE_IMAGES_PATH = 'https://sahosoftweb.com/api/';
  public static BASE_USERS_IMAGES_PATH = 'https://sahosoftweb.com/api/';

    static profileImage$ = new BehaviorSubject<string>('assets/images/user.webp');
}
