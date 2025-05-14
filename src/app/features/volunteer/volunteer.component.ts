import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { VolunteerService, Volunteer } from '../../services/volunteer.service';
import { LoadingService } from '../../core/services/loading.service';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './volunteer.component.html'
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

  async onSubmit() {
    if (this.isLoading) return;

    this.isLoading = true;
    this.loadingService.setLoading(true);

    try {
      this.updateSkills();
      this.updateInterests();
      this.volunteerService.submitVolunteerApplication(this.volunteer)
        .subscribe({
          next: (response) => {
            // handle success
          },
          error: (error) => {
            // handle error
          },
          complete: () => {
            this.isLoading = false;
            this.loadingService.setLoading(false);
          }
        });
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error('Error submitting volunteer application:', error);
    }
  }
}