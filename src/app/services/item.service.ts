import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  restAPI: string = 'http://localhost:3000/feed';
  constructor(private HttpClient: HttpClient) {}

  getItems() {
    return this.HttpClient.get<any[]>(this.restAPI);
  }

  getItemById(id: number) {
    return this.HttpClient.get<any>(this.restAPI + '/' + id);
  }
}
