import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-layout">
      <section class="contact-hero">
        <div class="container">
          <h1>Contact Us</h1>
          <p class="subtitle">Get in touch with us for any inquiries or to learn more about our initiatives</p>
        </div>
      </section>

      <section class="contact-content">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info">
              <h2>Contact Information</h2>
              <div class="info-item">
                <span class="info-icon">📍</span>
                <div>
                  <h3>Address</h3>
                  <p>123 Main Street, City Name<br>State, Country - 123456</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icon">📞</span>
                <div>
                  <h3>Phone</h3>
                  <p>+91 123 456 7890</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icon">✉️</span>
                <div>
                  <h3>Email</h3>
                  <p>infodivyangcaretrust.org</p>
                </div>
              </div>

              <div class="info-item">
                <span class="info-icon">⏰</span>
                <div>
                  <h3>Working Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM<br>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div class="contact-form">
              <h2>Send us a Message</h2>
              <form (ngSubmit)="onSubmit()">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" name="name" required>
                </div>

                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" name="email" required>
                </div>

                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required>
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .contact-hero {
      background-color: var(--primary-50);
      padding: var(--space-8) 0;
      text-align: center;
    }

    .contact-hero h1 {
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

    .contact-content {
      padding: var(--space-8) 0;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }

    @media (min-width: 992px) {
      .contact-grid {
        grid-template-columns: 1fr 1.5fr;
      }
    }

    .contact-info h2,
    .contact-form h2 {
      color: var(--primary-700);
      margin-bottom: var(--space-4);
    }

    .info-item {
      display: flex;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .info-icon {
      font-size: 1.5rem;
    }

    .info-item h3 {
      color: var(--neutral-800);
      margin-bottom: var(--space-1);
      font-size: 1.1rem;
    }

    .info-item p {
      color: var(--neutral-600);
      margin: 0;
      line-height: 1.5;
    }

    .contact-form {
      background-color: white;
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
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
    .form-group textarea {
      width: 100%;
      padding: var(--space-2);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px var(--primary-100);
    }

    .btn {
      width: 100%;
      padding: var(--space-3);
      font-size: 1.1rem;
    }
  `]
})
export class ContactComponent {
  onSubmit() {
    // Handle form submission
    console.log('Contact form submitted');
  }
}