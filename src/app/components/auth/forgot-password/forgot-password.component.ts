import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  authStatus: any = JSON.parse(localStorage.getItem('authStatus') || '{}');
  email: string = '';
  password: string = '';
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  updatePassword() {
    let tempUsers: any = [];
    this.userService.getUsersByEmail(this.email).subscribe((users) => {
      tempUsers = users;
      if (tempUsers.length != 0) {
        tempUsers[0].password = this.password;
        console.log(tempUsers[0]);
        this.userService.updateUser(tempUsers[0]).subscribe();
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
