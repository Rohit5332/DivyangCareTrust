import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMessageComponent } from '../home/components/board-message/board-message.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, BoardMessageComponent],
  template: `
    <div class="page-layout">
      <section class="about-hero">
        <div class="container">
          <h1>About DivyangCareTrust</h1>
          <p class="subtitle">Empowering lives through sustainable initiatives and inclusive support</p>
        </div>
      </section>
    <app-board-message [carousel]="false"></app-board-message>
      <section class="about-content">
        <div class="container">
          <div class="about-grid">
            <div class="about-text">
              <h2>Our Mission</h2>
              <p>
                DivyangCareTrust is dedicated to creating a more inclusive and sustainable future for differently-abled individuals. 
                We believe in empowering lives through comprehensive support, educational opportunities, and environmental initiatives.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To be a leading force in creating an inclusive society where differently-abled individuals have equal opportunities 
                to thrive, contribute, and lead fulfilling lives while promoting environmental sustainability.
              </p>

              <h2>Our Values</h2>
              <ul class="values-list">
                <li>
                  <strong>Inclusivity:</strong> Creating an environment where everyone feels valued and included
                </li>
                <li>
                  <strong>Sustainability:</strong> Promoting eco-friendly practices and environmental consciousness
                </li>
                <li>
                  <strong>Empowerment:</strong> Providing tools and opportunities for personal and professional growth
                </li>
                <li>
                  <strong>Community:</strong> Building strong support networks and fostering meaningful connections
                </li>
              </ul>
            </div>

            <div class="about-stats">
              <div class="stat-card">
                <span class="stat-number">500+</span>
                <span class="stat-label">Individuals Supported</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">50+</span>
                <span class="stat-label">Plantation Drives</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">1000+</span>
                <span class="stat-label">Trees Planted</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">20+</span>
                <span class="stat-label">Active Programs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  `,
  styles: [
    '.about-hero { background-color: var(--primary-50); padding: var(--space-8) 0; text-align: center; }',
    '.about-hero h1 { font-size: 3rem; color: var(--primary-800); margin-bottom: var(--space-3); }',
    '.subtitle { font-size: 1.2rem; color: var(--neutral-600); max-width: 600px; margin: 0 auto; }',
    '.about-content { padding: var(--space-8) 0; }',
    '.about-grid { display: grid; grid-template-columns: 1fr; gap: var(--space-6); }',
    '@media (min-width: 992px) { .about-grid { grid-template-columns: 2fr 1fr; } }',
    '.about-text h2 { color: var(--primary-700); margin-top: var(--space-6); margin-bottom: var(--space-3); }',
    '.about-text h2:first-child { margin-top: 0; }',
    '.about-text p { color: var(--neutral-700); margin-bottom: var(--space-4); line-height: 1.6; }',
    '.values-list { list-style: none; padding: 0; }',
    '.values-list li { margin-bottom: var(--space-3); padding-left: var(--space-4); position: relative; }',
    '.values-list li:before { content: "•"; color: var(--primary-500); position: absolute; left: 0; font-size: 1.5rem; }',
    '.about-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: var(--space-4); }',
    '.stat-card { background-color: white; padding: var(--space-4); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); text-align: center; transition: transform 0.3s ease; }',
    '.stat-card:hover { transform: translateY(-5px); }',
    '.stat-number { display: block; font-size: 2.5rem; font-weight: 700; color: var(--primary-600); margin-bottom: var(--space-1); }',
    '.stat-label { color: var(--neutral-600); font-size: 0.9rem; }'
  ]
})
export class AboutComponent { }
