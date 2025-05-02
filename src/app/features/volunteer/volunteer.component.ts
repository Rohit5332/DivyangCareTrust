import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { VolunteerService, Volunteer } from '../../services/volunteer.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-layout">
      <section class="volunteer-hero">
        <div class="container">
          <h1>Join Our Volunteer Team</h1>
          <p class="subtitle">Make a difference in the lives of differently-abled individuals by volunteering with us.</p>
        </div>
      </section>

      <section class="volunteer-form">
        <div class="container">
          <div class="form-container">
            <h2>Volunteer Application</h2>
            <form (ngSubmit)="onSubmit()" #volunteerForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="volunteer.name" 
                  required
                  #name="ngModel"
                >
                <div class="error-message" *ngIf="name.invalid && (name.dirty || name.touched)">
                  Name is required
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="volunteer.email" 
                  required
                  #email="ngModel"
                >
                <div class="error-message" *ngIf="email.invalid && (email.dirty || email.touched)">
                  Valid email is required
                </div>
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  [(ngModel)]="volunteer.phone"
                >
              </div>

              <div class="form-group">
                <label for="skills">Skills (comma-separated)</label>
                <input 
                  type="text" 
                  id="skills" 
                  name="skills" 
                  [(ngModel)]="skillsInput"
                  (blur)="updateSkills()"
                >
              </div>

              <div class="form-group">
                <label for="availability">Availability</label>
                <select 
                  id="availability" 
                  name="availability" 
                  [(ngModel)]="volunteer.availability"
                >
                  <option value="">Select availability</option>
                  <option value="weekday-morning">Weekday Mornings</option>
                  <option value="weekday-afternoon">Weekday Afternoons</option>
                  <option value="weekday-evening">Weekday Evenings</option>
                  <option value="weekend">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div class="form-group">
                <label for="interests">Areas of Interest</label>
                <div class="checkbox-group">
                  <label>
                    <input 
                      type="checkbox" 
                      name="interests" 
                      value="education" 
                      [(ngModel)]="selectedInterests.education"
                    > Education
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="interests" 
                      value="healthcare" 
                      [(ngModel)]="selectedInterests.healthcare"
                    > Healthcare
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="interests" 
                      value="events" 
                      [(ngModel)]="selectedInterests.events"
                    > Events
                  </label>
                  <label>
                    <input 
                      type="checkbox" 
                      name="interests" 
                      value="administration" 
                      [(ngModel)]="selectedInterests.administration"
                    > Administration
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary" 
                [disabled]="!volunteerForm.form.valid || isLoading"
              >
                {{ isLoading ? 'Submitting...' : 'Submit Application' }}
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
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--space-4);
    }

    .volunteer-hero {
      background-color: var(--primary-50);
      padding: var(--space-8) 0;
      text-align: center;
    }

    .volunteer-hero h1 {
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

    .volunteer-form {
      padding: var(--space-8) 0;
    }

    .form-container {
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-6);
      background-color: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
    }

    .form-container h2 {
      font-size: 2rem;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
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
    .form-group select {
      width: 100%;
      padding: var(--space-2);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      font-size: 1rem;
    }

    .checkbox-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--space-2);
    }

    .checkbox-group label {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-weight: normal;
    }

    .error-message {
      color: var(--error-500);
      font-size: 0.875rem;
      margin-top: var(--space-1);
    }

    .btn {
      width: 100%;
      padding: var(--space-3);
      font-size: 1.1rem;
      font-weight: 600;
      border: none;
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: var(--primary-600);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      background-color: var(--primary-700);
    }

    .btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `]
})
export class VolunteerComponent {
  volunteer: Volunteer = {
    name: '',
    email: '',
    phone: '',
    skills: [],
    availability: '',
    interests: []
  };

  skillsInput: string = '';
  selectedInterests = {
    education: false,
    healthcare: false,
    events: false,
    administration: false
  };

  isLoading = false;

  constructor(
    private volunteerService: VolunteerService,
    private loadingService: LoadingService
  ) {}

  updateSkills() {
    this.volunteer.skills = this.skillsInput
      .split(',')
      .map(skill => skill.trim())
      .filter(skill => skill.length > 0);
  }

  updateInterests() {
    this.volunteer.interests = Object.entries(this.selectedInterests)
      .filter(([_, selected]) => selected)
      .map(([interest]) => interest);
  }

  onSubmit() {
    if (this.isLoading) return;

    this.updateSkills();
    this.updateInterests();
    
    this.isLoading = true;
    this.loadingService.setLoading(true);

    this.volunteerService.submitVolunteerApplication(this.volunteer)
      .subscribe({
        next: (response) => {
          console.log('Application submitted successfully:', response);
          // Reset form
          this.volunteer = {
            name: '',
            email: '',
            phone: '',
            skills: [],
            availability: '',
            interests: []
          };
          this.skillsInput = '';
          this.selectedInterests = {
            education: false,
            healthcare: false,
            events: false,
            administration: false
          };
          // TODO: Show success message
        },
        error: (error) => {
          console.error('Error submitting application:', error);
          // TODO: Show error message
        },
        complete: () => {
          this.isLoading = false;
          this.loadingService.setLoading(false);
        }
      });
  }
} 