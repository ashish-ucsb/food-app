import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  authStatus: any = JSON.parse(localStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/orders';
  orders: any = [];

  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getOrders().subscribe((orders) => {
      this.orders = orders;
    });
  }

  getOrders() {
    return this.HttpClient.get<any[]>(this.restAPI);
  }
}
