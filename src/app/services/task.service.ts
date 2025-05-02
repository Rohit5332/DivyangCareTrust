import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface Task {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  category?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {
  private readonly endpoint = '/api/tasks';

  constructor(http: HttpClient) {
    super(http);
  }

  getTasks(): Observable<Task[]> {
    return this.get<Task[]>(this.endpoint);
  }

  getTask(id: number): Observable<Task> {
    return this.get<Task>(`${this.endpoint}/${id}`);
  }

  createTask(task: Task): Observable<Task> {
    return this.post<Task>(this.endpoint, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    return this.put<Task>(`${this.endpoint}/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }

  getTasksByStatus(status: Task['status']): Observable<Task[]> {
    return this.get<Task[]>(`${this.endpoint}/status/${status}`);
  }

  getTasksByPriority(priority: Task['priority']): Observable<Task[]> {
    return this.get<Task[]>(`${this.endpoint}/priority/${priority}`);
  }

  updateTaskStatus(id: number, status: Task['status']): Observable<Task> {
    return this.put<Task>(`${this.endpoint}/${id}/status`, { status });
  }
} 