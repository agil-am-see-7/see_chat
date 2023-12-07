import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  //private apiUrl = 'https://expressapiamsee.onrender.com'; // Ersetze dies durch die tatsächliche URL deiner REST API
  private apiUrl = 'localhost:3000/api/history'

  constructor(private http: HttpClient) { }

  public addToHistory(message: Message): Observable<Message> {
    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json'),

    };

    return this.http.post<Message>(this.apiUrl, message, options);
  }

  public getHistory(): Observable<any> {
    return this.http.get(this.apiUrl + '/getHistory'); // muss korrekter pfad sein zu Express api
  }
}