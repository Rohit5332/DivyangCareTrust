import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface Program {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  status: 'upcoming' | 'ongoing' | 'completed';
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getPrograms(): Observable<Program[]> {
    return this.get<Program[]>('/programs');
  }

  getProgramById(id: number): Observable<Program> {
    return this.get<Program>(`/programs/${id}`);
  }

  createProgram(program: Omit<Program, 'id'>): Observable<Program> {
    return this.post<Program>('/programs', program);
  }

  updateProgram(id: number, program: Partial<Program>): Observable<Program> {
    return this.put<Program>(`/programs/${id}`, program);
  }

  deleteProgram(id: number): Observable<void> {
    return this.delete<void>(`/programs/${id}`);
  }

  registerForProgram(programId: number, userId: number): Observable<void> {
    return this.post<void>(`/programs/${programId}/register`, { userId });
  }

  unregisterFromProgram(programId: number, userId: number): Observable<void> {
    return this.delete<void>(`/programs/${programId}/register/${userId}`);
  }

  getProgramParticipants(programId: number): Observable<any[]> {
    return this.get<any[]>(`/programs/${programId}/participants`);
  }
} 