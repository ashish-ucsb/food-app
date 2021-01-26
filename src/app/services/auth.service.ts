import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string) {
    if (this.isloggedIn()) {
      localStorage.removeItem('authStatus');
    }
    this.userService.getUsersByEmail(email).subscribe((users) => {
      if (password == users[0].password) {
        localStorage.setItem(
          'authStatus',
          JSON.stringify({
            status: true,
            id: users[0].id,
            name: users[0].name,
            email: users[0].email,
          })
        );
      }
    });
  }

  isloggedIn() {
    let status: string = localStorage.getItem('authStatus') || '';
    if (status != '' && JSON.parse(status)['status']) {
      return true;
    } else {
      return false;
    }
  }
}
