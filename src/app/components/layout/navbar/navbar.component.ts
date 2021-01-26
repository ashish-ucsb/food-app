import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  authStatus: string = localStorage.getItem('authStatus') || '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('authStatus');
    this.router.navigate(['/feed']);
  }
}
