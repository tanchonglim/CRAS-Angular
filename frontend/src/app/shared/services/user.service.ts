import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get $currentUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/user`);
  }
}
