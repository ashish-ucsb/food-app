import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this.userService
      .addUser({
        name: this.name,
        email: this.email,
        password: this.password,
        email_verified_at: new Date(),
        created_at: new Date(),
        updated_at: new Date(),
        api_token: '',
      })
      .subscribe();
    this.router.navigate(['/auth/login']);
  }
}
