import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  authStatus: any = JSON.parse(localStorage.getItem('authStatus') || '{}');
  user: any = {};
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserById(this.authStatus['id']).subscribe((user) => {
      this.user = user;
    });
  }
}
