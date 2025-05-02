import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface Program {
  id?: number;
  title: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  location: string;
  imageUrl?: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  participants?: number;
  maxParticipants?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService extends ApiService {
  private readonly endpoint = '/api/programs';

  constructor(http: HttpClient) {
    super(http);
  }

  getPrograms(): Observable<Program[]> {
    return this.get<Program[]>(this.endpoint);
  }

  getProgram(id: number): Observable<Program> {
    return this.get<Program>(`${this.endpoint}/${id}`);
  }

  createProgram(program: Program): Observable<Program> {
    return this.post<Program>(this.endpoint, program);
  }

  updateProgram(id: number, program: Program): Observable<Program> {
    return this.put<Program>(`${this.endpoint}/${id}`, program);
  }

  deleteProgram(id: number): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }

  getUpcomingPrograms(): Observable<Program[]> {
    return this.get<Program[]>(`${this.endpoint}/upcoming`);
  }

  getOngoingPrograms(): Observable<Program[]> {
    return this.get<Program[]>(`${this.endpoint}/ongoing`);
  }
} 