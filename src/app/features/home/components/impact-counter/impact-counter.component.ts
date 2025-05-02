import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImpactMetric {
  value: number;
  title: string;
  icon: string;
  suffix?: string;
}

@Component({
  selector: 'app-impact-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="impact-counter">
      <div class="container">
        <div class="section-header text-center mb-4">
          <h2>Our Impact</h2>
          <p>The numbers that showcase our commitment to creating positive change</p>
        </div>
        
        <div class="metrics">
          @for (metric of impactMetrics; track metric.title) {
            <div class="metric-card fade-in">
              <div class="metric-icon">
                <span class="material-symbols-outlined">{{ metric.icon }}</span>
              </div>
              <div class="metric-value">
                <span class="counter">{{ metric.value }}</span>{{ metric.suffix }}
              </div>
              <div class="metric-title">{{ metric.title }}</div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .impact-counter {
      padding: var(--space-6) 0;
      background-color: var(--primary-800);
      color: white;
    }
    
    .section-header h2 {
      color: white;
      position: relative;
      display: inline-block;
      padding-bottom: var(--space-1);
    }
    
    .section-header h2::after {
      content: '';
      position: absolute;
      width: 80px;
      height: 3px;
      background-color: var(--primary-300);
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    
    .section-header p {
      max-width: 700px;
      margin: var(--space-2) auto 0;
      color: var(--neutral-200);
    }
    
    .metrics {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-3);
      margin-top: var(--space-4);
    }
    
    @media (min-width: 576px) {
      .metrics {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .metrics {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .metric-card {
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: var(--space-3);
      text-align: center;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }
    
    .metric-card:hover {
      transform: translateY(-5px);
      background-color: rgba(255, 255, 255, 0.15);
    }
    
    .metric-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      margin: 0 auto var(--space-2);
      background-color: var(--primary-600);
      border-radius: 50%;
    }
    
    .metric-icon .material-symbols-outlined {
      font-size: 2rem;
    }
    
    .metric-value {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-1);
      color: white;
    }
    
    .metric-title {
      font-size: 1.1rem;
      color: var(--neutral-200);
    }
  `]
})
export class ImpactCounterComponent implements OnInit {
  impactMetrics: ImpactMetric[] = [
    { value: 5000, title: 'Trees Planted', icon: 'nature', suffix: '+' },
    { value: 1200, title: 'Beneficiaries Helped', icon: 'volunteer_activism', suffix: '+' },
    { value: 35, title: 'Courses Offered', icon: 'school', suffix: '' },
    { value: 48, title: 'Districts Covered', icon: 'location_on', suffix: '' }
  ];
  
  ngOnInit() {
    // In a real implementation, you would add animation for counting up
    // This is a placeholder for demonstration purposes
  }
}