import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface Volunteer {
  id?: number;
  name: string;
  email: string;
  phone?: string;
  skills?: string[];
  availability?: string;
  interests?: string[];
  status?: 'pending' | 'approved' | 'rejected';
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerService extends ApiService {
  private readonly endpoint = '/api/volunteer';

  constructor(http: HttpClient) {
    super(http);
  }

  submitVolunteerApplication(volunteer: Volunteer): Observable<Volunteer> {
    return this.post<Volunteer>(this.endpoint, volunteer);
  }

  getVolunteerApplications(): Observable<Volunteer[]> {
    return this.get<Volunteer[]>(this.endpoint);
  }

  getVolunteerApplication(id: number): Observable<Volunteer> {
    return this.get<Volunteer>(`${this.endpoint}/${id}`);
  }

  updateVolunteerStatus(id: number, status: Volunteer['status']): Observable<Volunteer> {
    return this.put<Volunteer>(`${this.endpoint}/${id}/status`, { status });
  }
} 