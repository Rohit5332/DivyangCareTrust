import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
  assignedTo: number;
  programId?: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getTasks(): Observable<Task[]> {
    return this.get<Task[]>('/tasks');
  }

  getTaskById(id: number): Observable<Task> {
    return this.get<Task>(`/tasks/${id}`);
  }

  getTasksByProgram(programId: number): Observable<Task[]> {
    return this.get<Task[]>(`/tasks/program/${programId}`);
  }

  getTasksByUser(userId: number): Observable<Task[]> {
    return this.get<Task[]>(`/tasks/user/${userId}`);
  }

  createTask(task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>): Observable<Task> {
    return this.post<Task>('/tasks', task);
  }

  updateTask(id: number, task: Partial<Task>): Observable<Task> {
    return this.put<Task>(`/tasks/${id}`, task);
  }

  deleteTask(id: number): Observable<void> {
    return this.delete<void>(`/tasks/${id}`);
  }

  updateTaskStatus(id: number, status: Task['status']): Observable<Task> {
    return this.put<Task>(`/tasks/${id}/status`, { status });
  }

  assignTask(taskId: number, userId: number): Observable<Task> {
    return this.put<Task>(`/tasks/${taskId}/assign`, { userId });
  }
} 