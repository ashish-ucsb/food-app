import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  restAPI: string = 'http://localhost:3000/users';

  constructor(private HttpClient: HttpClient) {}

  getUsers() {
    return this.HttpClient.get<any[]>(this.restAPI);
  }

  getUserById(id: number): Observable<any> {
    return this.HttpClient.get<any>(this.restAPI + '/' + id);
  }

  getUsersByEmail(email: string) {
    return this.HttpClient.get<any[]>(this.restAPI + '?email=' + email);
  }
}
