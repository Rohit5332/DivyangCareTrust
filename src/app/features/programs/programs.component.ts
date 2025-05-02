import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-layout">
      <section class="programs-hero">
        <div class="container">
          <h1>Our Programs</h1>
          <p class="subtitle">Discover our initiatives designed to create lasting impact</p>
        </div>
      </section>

      <section class="programs-content">
        <div class="container">
          <div class="programs-grid">
            <div class="program-card">
              <div class="program-icon">🌱</div>
              <h3>Plantation Drives</h3>
              <p>
                Regular tree plantation initiatives involving differently-abled individuals, 
                promoting environmental awareness and community participation.
              </p>
              <ul class="program-features">
                <li>Monthly plantation events</li>
                <li>Educational workshops</li>
                <li>Community engagement</li>
              </ul>
            </div>

            <div class="program-card">
              <div class="program-icon">📚</div>
              <h3>Educational Support</h3>
              <p>
                Comprehensive educational programs including scholarships, 
                skill development workshops, and career counseling.
              </p>
              <ul class="program-features">
                <li>Scholarship programs</li>
                <li>Skill development</li>
                <li>Career guidance</li>
              </ul>
            </div>

            <div class="program-card">
              <div class="program-icon">🛠️</div>
              <h3>Assistive Technology</h3>
              <p>
                Providing and training on the use of assistive devices and 
                technologies to enhance independence and productivity.
              </p>
              <ul class="program-features">
                <li>Device distribution</li>
                <li>Training sessions</li>
                <li>Technical support</li>
              </ul>
            </div>

            <div class="program-card">
              <div class="program-icon">🤝</div>
              <h3>Community Support</h3>
              <p>
                Building a supportive community through regular meetups, 
                counseling sessions, and peer support groups.
              </p>
              <ul class="program-features">
                <li>Support groups</li>
                <li>Counseling services</li>
                <li>Social events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .programs-hero {
      background-color: var(--primary-50);
      padding: var(--space-8) 0;
      text-align: center;
    }

    .programs-hero h1 {
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

    .programs-content {
      padding: var(--space-8) 0;
    }

    .programs-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-4);
    }

    .program-card {
      background-color: white;
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .program-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
    }

    .program-icon {
      font-size: 2.5rem;
      margin-bottom: var(--space-3);
    }

    .program-card h3 {
      color: var(--primary-700);
      margin-bottom: var(--space-2);
    }

    .program-card p {
      color: var(--neutral-700);
      margin-bottom: var(--space-3);
      line-height: 1.6;
    }

    .program-features {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .program-features li {
      padding-left: var(--space-4);
      position: relative;
      margin-bottom: var(--space-2);
      color: var(--neutral-600);
    }

    .program-features li:before {
      content: '✓';
      color: var(--primary-500);
      position: absolute;
      left: 0;
    }
  `]
})
export class ProgramsComponent {}