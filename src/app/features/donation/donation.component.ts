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
  templateUrl: './donation.component.html'
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