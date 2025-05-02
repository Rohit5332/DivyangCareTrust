import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Join Our Mission</h2>
          <p>Together, we can create a more inclusive and sustainable world. Join us as a volunteer, donor, or participant in our programs.</p>
          <div class="cta-buttons">
            <a routerLink="/contact" class="btn btn-primary">Get Involved</a>
            <a routerLink="/programs" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta {
      padding: var(--space-6) 0;
      background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/2449543/pexels-photo-2449543.jpeg?auto=compress&cs=tinysrgb&w=1600');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      color: white;
    }
    
    .cta-content {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }
    
    .cta h2 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: var(--space-2);
    }
    
    .cta p {
      font-size: 1.2rem;
      margin-bottom: var(--space-4);
      color: var(--neutral-200);
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--space-3);
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .cta-buttons .btn {
      padding: var(--space-1) var(--space-3);
      font-size: 1.1rem;
    }
  `]
})
export class CallToActionComponent {
}