import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonationCardComponent } from './components/donation-card/donation-card.component';
import { DonationService, DonationOption, Donation } from '../../services/donation.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [CommonModule, FormsModule, DonationCardComponent],
  template: `
    <div class="page-layout">
      <section class="donation-hero">
        <div class="container">
          <h1>Make a Difference Today</h1>
          <p class="subtitle">Your contribution can help us create a more inclusive and sustainable future for differently-abled individuals.</p>
        </div>
      </section>

      <section class="donation-options">
        <div class="container">
          <h2>Choose Your Donation Amount</h2>
          <p class="section-description">Select an amount that resonates with you. Every contribution makes a difference.</p>
          
          <div class="donation-grid">
            <app-donation-card
              *ngFor="let option of donationOptions"
              [option]="option"
              [isSelected]="selectedOption === option"
              (selected)="onDonationSelected($event)"
            ></app-donation-card>
          </div>

          <div class="donation-form" *ngIf="selectedOption">
            <h3>Complete Your Donation</h3>
            <form (ngSubmit)="onSubmit()" #donationForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" [(ngModel)]="donation.name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" [(ngModel)]="donation.email" required>
              </div>
              
              <div class="form-group">
                <label for="message">Message (Optional)</label>
                <textarea id="message" name="message" [(ngModel)]="donation.message" rows="3"></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary" [disabled]="!donationForm.form.valid || isLoading">
                {{ isLoading ? 'Processing...' : 'Complete Donation' }}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .page-layout {
      min-height: 100vh;
      background-color: var(--neutral-50);
      padding-top: 80px; /* Add padding for fixed header */
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--space-4);
    }

    .donation-hero {
      background-color: var(--primary-50);
      padding: var(--space-8) 0;
      text-align: center;
    }

    .donation-hero h1 {
      font-size: 3rem;
      color: var(--primary-800);
      margin-bottom: var(--space-3);
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--neutral-600);
      max-width: 600px;
      margin: 0 auto;
    }

    .donation-options {
      padding: var(--space-8) 0;
    }

    .donation-options h2 {
      text-align: center;
      font-size: 2.5rem;
      color: var(--neutral-900);
      margin-bottom: var(--space-2);
    }

    .section-description {
      text-align: center;
      color: var(--neutral-600);
      max-width: 600px;
      margin: 0 auto var(--space-6);
    }

    .donation-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-4);
      max-width: 1200px;
      margin: 0 auto var(--space-8);
    }

    .donation-form {
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-6);
      background-color: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }

    .donation-form h3 {
      font-size: 1.8rem;
      color: var(--neutral-900);
      margin-bottom: var(--space-4);
      text-align: center;
    }

    .form-group {
      margin-bottom: var(--space-4);
    }

    .form-group label {
      display: block;
      margin-bottom: var(--space-1);
      color: var(--neutral-700);
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: var(--space-2);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px var(--primary-100);
    }

    .btn {
      width: 100%;
      padding: var(--space-3);
      font-size: 1.1rem;
      background-color: var(--primary-500);
      color: white;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn:hover:not(:disabled) {
      background-color: var(--primary-600);
    }

    .btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `]
})
export class DonationComponent implements OnInit {
  selectedOption: DonationOption | null = null;
  donation: Donation = {
    amount: 0,
    name: '',
    email: '',
    message: ''
  };
  isLoading = false;

  donationOptions: DonationOption[] = [
    {
      amount: 500,
      description: 'Support one month of educational materials'
    },
    {
      amount: 1000,
      description: 'Provide a week of therapy sessions'
    },
    {
      amount: 2000,
      description: 'Fund a month of vocational training'
    },
    {
      amount: 5000,
      description: 'Support a year of special education'
    }
  ];

  constructor(
    private donationService: DonationService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    // Initialize component
    this.loadingService.setLoading(false);
  }

  onDonationSelected(option: DonationOption) {
    this.selectedOption = option;
    this.donation.amount = option.amount;
  }

  onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.loadingService.setLoading(true);

    this.donationService.submitDonation(this.donation)
      .subscribe({
        next: (response) => {
          console.log('Donation submitted successfully:', response);
          // Reset form
          this.donation = {
            amount: 0,
            name: '',
            email: '',
            message: ''
          };
          this.selectedOption = null;
          // TODO: Show success message
        },
        error: (error) => {
          console.error('Error submitting donation:', error);
          // TODO: Show error message
        },
        complete: () => {
          this.isLoading = false;
          this.loadingService.setLoading(false);
        }
      });
  }
} 