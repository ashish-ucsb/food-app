import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  authStatus: any = JSON.parse(localStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/friends';
  friends: any = [];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getFriends().subscribe((data) => {
      this.friends = data;
    });
  }

  getFriends() {
    return this.HttpClient.get<any[]>(this.restAPI);
  }
}
