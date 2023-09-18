import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = 'http://localhost:3000/api/v2';
    this.myApiUrl = '/user';
  }

  logIn(user: User):Observable<string> {
    return this.http.post<string>(
      `${this.myAppUrl}${this.myApiUrl}/login`,
      user
    );
  }
}
