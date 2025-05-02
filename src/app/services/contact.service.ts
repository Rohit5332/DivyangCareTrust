import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface ContactMessage {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date?: Date;
  status?: 'pending' | 'read' | 'replied';
}

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ApiService {
  private readonly endpoint = '/api/contact';

  constructor(http: HttpClient) {
    super(http);
  }

  sendMessage(message: ContactMessage): Observable<ContactMessage> {
    return this.post<ContactMessage>(this.endpoint, message);
  }

  getMessages(): Observable<ContactMessage[]> {
    return this.get<ContactMessage[]>(this.endpoint);
  }

  getMessage(id: number): Observable<ContactMessage> {
    return this.get<ContactMessage>(`${this.endpoint}/${id}`);
  }

  updateMessageStatus(id: number, status: ContactMessage['status']): Observable<ContactMessage> {
    return this.put<ContactMessage>(`${this.endpoint}/${id}/status`, { status });
  }
} 