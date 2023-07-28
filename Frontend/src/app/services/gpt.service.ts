import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GptService {
  //Use this to Test AI Latest Backend
  private apiUrl = 'http://localhost:3000/api/recommendations';

  constructor(private http: HttpClient) {}

  getRecommendations(answers: any) {
    return this.http.post<any>(this.apiUrl, { answers });
  }
}
