import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { UserInformation } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: any = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<UserInformation>(this.url);
  }
}
