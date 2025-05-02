import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>DivyangCareTrust</h3>
            <p>Empowering lives through care, compassion, and sustainable initiatives. Together we can make a difference.</p>
          </div>
          
          <div class="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a routerLink="/">Home</a></li>
              <li><a routerLink="/about">About Us</a></li>
              <li><a routerLink="/programs">Programs</a></li>
              <li><a routerLink="/gallery">Gallery</a></li>
              <li><a routerLink="/contact">Contact</a></li>
              <li><a routerLink="/tasks">Tasks</a></li>
            </ul>
          </div>
          
          <div class="footer-section programs">
            <h3>Our Programs</h3>
            <ul>
              <li><a routerLink="/programs">Plantation Drives</a></li>
              <li><a routerLink="/programs">Goodies Distribution</a></li>
              <li><a routerLink="/programs">Learning Courses</a></li>
              <li><a routerLink="/programs">Certification Programs</a></li>
            </ul>
          </div>
          
          <div class="footer-section contact">
            <h3>Contact Us</h3>
            <p><span class="material-symbols-outlined">location_on</span> 123 NGO Street, Green City</p>
            <p><span class="material-symbols-outlined">call</span> +91 9876543210</p>
            <p><span class="material-symbols-outlined">mail</span> infodivyangcaretrust.org</p>
            <div class="social-links">
              <a href="#replace with facebook link" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
              <a href="#replace with twitter link" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#replace with instagram link" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              <a href="#replace with linkedin link" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} DivyangCareTrust. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a routerLink="/privacy-policy">Privacy Policy</a>
            <a routerLink="/terms-of-service">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: var(--primary-800);
      color: white;
      padding: var(--space-5) 0 var(--space-2);
      margin-top: var(--space-5);
    }
    
    .footer-content {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-4);
      margin-bottom: var(--space-4);
    }
    
    @media (min-width: 768px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (min-width: 992px) {
      .footer-content {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    
    .footer-section h3 {
      color: white;
      margin-bottom: var(--space-2);
      position: relative;
      display: inline-block;
    }
    
    .footer-section h3:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 2px;
      bottom: -5px;
      left: 0;
      background-color: var(--primary-300);
    }
    
    .footer-section p {
      color: var(--neutral-200);
      margin-bottom: var(--space-1);
      display: flex;
      align-items: center;
    }
    
    .footer-section .material-symbols-outlined {
      margin-right: var(--space-1);
      font-size: 1rem;
    }
    
    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footer-section li {
      margin-bottom: var(--space-1);
    }
    
    .footer-section a {
      color: var(--neutral-200);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .footer-section a:hover {
      color: white;
    }
    
    .social-links {
      display: flex;
      gap: var(--space-2);
      margin-top: var(--space-2);
    }
    
    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.1);
      transition: background-color 0.3s ease;
    }
    
    .social-links a:hover {
      background-color: var(--primary-600);
    }
    
    .social-links a i {
      font-size: 1.3rem;
      color: white;
      transition: color 0.3s;
    }
    
    .social-links a:hover i {
      color: var(--primary-300);
    }
    
    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: var(--space-2);
      margin-top: var(--space-3);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    @media (min-width: 768px) {
      .footer-bottom {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
      }
    }
    
    .footer-bottom p {
      color: var(--neutral-300);
      margin-bottom: var(--space-1);
    }
    
    .footer-bottom-links {
      display: flex;
      gap: var(--space-2);
    }
    
    .footer-bottom-links a {
      color: var(--neutral-300);
      text-decoration: none;
      font-size: 0.9rem;
    }
    
    .footer-bottom-links a:hover {
      color: white;
    }
    
    @media (max-width: 500px) {
      .social-links {
        flex-wrap: wrap;
        gap: 8px;
        justify-content: flex-start;
      }
      .social-links a {
        width: 32px;
        height: 32px;
        font-size: 1.1rem;
      }
      .footer-section.contact {
        margin-bottom: 1.5rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}