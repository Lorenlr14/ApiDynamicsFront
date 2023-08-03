import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://localhost:3000/api';
  }

  getAll() {
    return firstValueFrom(
      this.httpClient.get<any>(this.baseUrl)
    )
  }
}
