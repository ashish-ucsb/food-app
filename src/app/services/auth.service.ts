import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private userService: UserService) {}

  login(email: string, password: string) {
    this.userService.getUsersByEmail(email).subscribe((users) => {
      if (password == users[0].password) {
        localStorage.setItem('authStatus', 'logged-in');
      }
    });
  }

  logout() {
    localStorage.setItem('authStatus', 'logged-out');
  }
}
