import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="hero-content container">
        <div class="hero-text fade-in">
          <h1>Empowering Lives, Enriching Earth</h1>
          <p class="subtitle">DivyangCareTrust is dedicated to creating a sustainable future for differently-abled individuals through plantation drives, support initiatives, and educational opportunities.</p>
          <div class="hero-buttons">
            <a routerLink="/programs" class="btn btn-primary">Our Programs</a>
            <a routerLink="/contact" class="btn btn-secondary">Get Involved</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 80vh;
      min-height: 500px;
      max-height: 800px;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/images/gallery/groupPhotoGallery1.jpg');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      color: white;
    }
    
    .hero-content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    
    .hero-text {
      max-width: 600px;
      padding: var(--space-3);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      margin-top: 60px;
    }
    
    .hero h1 {
      color: white;
      font-size: 2.5rem;
      margin-bottom: var(--space-2);
      line-height: 1.2;
    }
    
    @media (min-width: 768px) {
      .hero h1 {
        font-size: 3.5rem;
      }
      .hero-text {
        margin-top: 100px;
      }
    }
    
    .subtitle {
      font-size: 1.1rem;
      margin-bottom: var(--space-3);
      line-height: 1.5;
    }
    
    .hero-buttons {
      display: flex;
      gap: var(--space-2);
      flex-wrap: wrap;
    }
    
    .hero-buttons .btn {
      padding: var(--space-1) var(--space-3);
      font-size: 1.1rem;
    }
  `]
})
export class HeroSectionComponent {
}
