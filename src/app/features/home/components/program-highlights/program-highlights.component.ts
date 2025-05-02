import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-highlights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="program-highlights">
      <div class="container">
        <div class="section-header text-center mb-4">
          <h2>Our Core Programs</h2>
          <p>Explore how DivyangCareTrust is making a difference through our various initiatives</p>
        </div>
        
        <div class="program-cards">
          <div class="program-card card slide-in">
            <div class="program-image">
              <img src="assets/images/programs/plantationFarheen.jpg" alt="Plantation Drive" loading="lazy">
            </div>
            <div class="program-content">
              <h3>Plantation Drives</h3>
              <p>Join our mission to create a greener planet through community plantation initiatives across urban and rural areas.</p>
              <a routerLink="/programs" class="read-more">Learn more <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
          
          <div class="program-card card slide-in">
            <div class="program-image">
              <img src="assets/images/programs/plantationRahul.jpg" alt="Goodies Distribution" loading="lazy">
            </div>
            <div class="program-content">
              <h3>Goodies Distribution</h3>
              <p>Supporting differently-abled individuals with essential supplies, assistive devices, and care packages.</p>
              <a routerLink="/programs" class="read-more">Learn more <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
          
          <div class="program-card card slide-in">
            <div class="program-image">
              <img src="assets/images/programs/plantation-3.jpg" alt="Learning Courses" loading="lazy">
            </div>
            <div class="program-content">
              <h3>Learning Courses</h3>
              <p>Empowering through education with accessible courses and certification programs for career advancement.</p>
              <a routerLink="/programs" class="read-more">Learn more <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .program-highlights {
      padding: var(--space-6) 0;
      background-color: var(--neutral-50);
    }
    
    .section-header h2 {
      color: var(--primary-800);
      position: relative;
      display: inline-block;
      padding-bottom: var(--space-1);
    }
    
    .section-header h2::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: var(--primary-500);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .section-header p {
      max-width: 700px;
      margin: var(--space-2) auto 0;
      color: var(--neutral-700);
    }
    
    .program-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
      margin-top: var(--space-4);
    }
    
    @media (min-width: 768px) {
      .program-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .program-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .program-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    
    .program-image {
      height: 200px;
      overflow: hidden;
    }
    
    .program-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .program-card:hover .program-image img {
      transform: scale(1.05);
    }
    
    .program-content {
      padding: var(--space-3);
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .program-content h3 {
      color: var(--primary-700);
      margin-bottom: var(--space-2);
    }
    
    .program-content p {
      color: var(--neutral-700);
      margin-bottom: var(--space-2);
      flex-grow: 1;
    }
    
    .read-more {
      display: flex;
      align-items: center;
      color: var(--primary-600);
      font-weight: 500;
      margin-top: auto;
    }
    
    .read-more .material-symbols-outlined {
      margin-left: var(--space-1);
      transition: transform 0.3s ease;
    }
    
    .read-more:hover .material-symbols-outlined {
      transform: translateX(4px);
    }
  `]
})
export class ProgramHighlightsComponent {
}