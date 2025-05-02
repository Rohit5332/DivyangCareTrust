import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials">
      <div class="container">
        <div class="section-header text-center mb-4">
          <h2>Testimonials</h2>
          <p>What people say about our initiatives and impact</p>
        </div>
        
        <div class="testimonial-slider">
          <div class="testimonial-cards">
            @for (testimonial of testimonials; track testimonial.id) {
              <div class="testimonial-card card slide-in">
                <div class="quote-icon">
                  <span class="material-symbols-outlined">format_quote</span>
                </div>
                <p class="quote">{{ testimonial.quote }}</p>
                <div class="author-info">
                  <div class="author-image">
                    <img [src]="testimonial.image" [alt]="testimonial.author" loading="lazy">
                  </div>
                  <div class="author-details">
                    <h4>{{ testimonial.author }}</h4>
                    <p>{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials {
      padding: var(--space-6) 0;
      background-color: var(--neutral-100);
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
    
    .testimonial-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-3);
      margin-top: var(--space-4);
    }
    
    @media (min-width: 768px) {
      .testimonial-cards {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .testimonial-cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    
    .testimonial-card {
      padding: var(--space-3);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .quote-icon {
      color: var(--primary-500);
      font-size: 2rem;
      margin-bottom: var(--space-2);
    }
    
    .quote {
      font-style: italic;
      color: var(--neutral-700);
      margin-bottom: var(--space-3);
      flex-grow: 1;
    }
    
    .author-info {
      display: flex;
      align-items: center;
    }
    
    .author-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: var(--space-2);
    }
    
    .author-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .author-details h4 {
      margin-bottom: 0;
      font-size: 1rem;
      color: var(--neutral-900);
    }
    
    .author-details p {
      margin-bottom: 0;
      font-size: 0.9rem;
      color: var(--neutral-600);
    }
  `]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The plantation drive organized by DivyangCareTrust changed my perspective on how I can contribute to the environment despite my disability. They provided all the support I needed.",
      author: "Rahul Gupta",
      role: "Board Member",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      quote: "The learning courses offered by DivyangCareTrust helped me gain skills that I could use to earn a living. Their inclusive approach makes education accessible to everyone.",
      author: "Rahul Patel",
      role: "Course Graduate",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      quote: "As a volunteer, I've witnessed the incredible impact DivyangCareTrust has on the community. Their commitment to empowering differently-abled individuals is truly inspiring.",
      author: "Anita Desai",
      role: "Volunteer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
}