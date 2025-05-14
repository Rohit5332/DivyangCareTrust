import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'user_data';
  
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();
  
  public isAuthenticated = signal(false);

  constructor(
    protected override http: HttpClient,
    private router: Router
  ) {
    super(http);
    this.loadStoredUser();
  }

  private loadStoredUser(): void {
    const token = this.getToken();
    const userData = localStorage.getItem(this.USER_KEY);
    
    if (token && userData) {
      this.userSubject.next(JSON.parse(userData));
      this.isAuthenticated.set(true);
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.post<AuthResponse>('/auth/login', { email, password }).pipe(
      tap(response => {
        this.setToken(response.token);
        this.setUser(response.user);
        this.isAuthenticated.set(true);
      })
    );
  }

  register(userData: { name: string; email: string; password: string }): Observable<AuthResponse> {
    return this.post<AuthResponse>('/auth/register', userData).pipe(
      tap(response => {
        this.setToken(response.token);
        this.setUser(response.user);
        this.isAuthenticated.set(true);
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.userSubject.next(null);
    this.isAuthenticated.set(false);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setUser(user: User): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this.userSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }
} 