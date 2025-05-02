import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface DonationOption {
  id?: number;
  amount: number;
  description: string;
  isDefault?: boolean;
}

export interface Donation {
  id?: number;
  amount: number;
  name: string;
  email: string;
  message?: string;
  status?: 'pending' | 'completed' | 'failed';
  createdAt?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DonationService extends ApiService {
  private readonly endpoint = '/api/donations';

  constructor(http: HttpClient) {
    super(http);
  }

  submitDonation(donation: Donation): Observable<Donation> {
    return this.post<Donation>(this.endpoint, donation);
  }

  getDonations(): Observable<Donation[]> {
    return this.get<Donation[]>(this.endpoint);
  }

  createDonation(donation: Donation): Observable<Donation> {
    return this.post<Donation>(this.endpoint, donation);
  }

  getDonation(id: number): Observable<Donation> {
    return this.get<Donation>(`${this.endpoint}/${id}`);
  }

  updateDonation(id: number, donation: Donation): Observable<Donation> {
    return this.put<Donation>(`${this.endpoint}/${id}`, donation);
  }

  deleteDonation(id: number): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }

  getDonationOptions(): Observable<DonationOption[]> {
    return this.get<DonationOption[]>(`${this.endpoint}/options`);
  }

  createDonationOption(option: DonationOption): Observable<DonationOption> {
    return this.post<DonationOption>(`${this.endpoint}/options`, option);
  }

  updateDonationOption(id: number, option: DonationOption): Observable<DonationOption> {
    return this.put<DonationOption>(`${this.endpoint}/options/${id}`, option);
  }

  deleteDonationOption(id: number): Observable<void> {
    return this.delete<void>(`${this.endpoint}/options/${id}`);
  }
} 