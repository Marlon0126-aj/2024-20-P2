import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private apiUrl: string = environment.baseUrl + 'trainers.json';

  constructor(private http: HttpClient) { }

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl);
  }

}

