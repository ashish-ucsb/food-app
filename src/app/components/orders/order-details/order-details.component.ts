import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  authStatus: any = JSON.parse(localStorage.getItem('authStatus') || '{}');
  restAPI: string = 'http://localhost:3000/orders';
  order: any = {};

  constructor(private HttpClient: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    this.getOrderById(id).subscribe((order) => {
      this.order = order;
    });
  }

  getOrderById(id: number): Observable<any> {
    return this.HttpClient.get<any>(this.restAPI + '/' + id);
  }
}
