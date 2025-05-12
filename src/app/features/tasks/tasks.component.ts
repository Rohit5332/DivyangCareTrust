import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Service {
  id: number;
  title: string;
  description: string;
  facility: string;
  provider: string;
  status: 'available' | 'in-progress' | 'completed' | 'scheduled';
  dueDate: string;
  contactInfo: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="page-layout">
      <section class="page-header">
        <div class="container">
          <h1 class="page-title">Legal Services & Support</h1>
          <p class="page-description">
            Your trusted legal partner for comprehensive legal and financial solutions. With years of experience and a client-first approach, 
            we handle a wide range of matters with dedication and expertise.
          </p>
        </div>
      </section>

      <section class="page-content">
        <div class="container">
          <!-- Why Choose Us -->
          <div class="why-choose-us">
            <h2 class="section-title">Why Choose Us?</h2>
            <div class="features-grid">
              <div class="feature-item">
                <h3>Personalized Service</h3>
                <p>Tailored legal solutions to meet your specific needs</p>
              </div>
              <div class="feature-item">
                <h3>Strong Representation</h3>
                <p>Experienced courtroom presence and advocacy</p>
              </div>
              <div class="feature-item">
                <h3>Transparent Process</h3>
                <p>Clear communication and affordable fees</p>
              </div>
              <div class="feature-item">
                <h3>Complete Confidentiality</h3>
                <p>Your privacy and trust are our priority</p>
              </div>
            </div>
          </div>

          <!-- Filters -->
          <div class="filters">
            <div class="filters-grid">
              <div class="filter-item">
                <label class="filter-label">Service Category</label>
                <select 
                  [(ngModel)]="filters.facility" 
                  class="filter-select"
                >
                  <option value="">All Services</option>
                  <option *ngFor="let facility of availableFacilities" [value]="facility">
                    {{ facility }}
                  </option>
                </select>
              </div>
              <div class="filter-item">
                <label class="filter-label">Status</label>
                <select 
                  [(ngModel)]="filters.status" 
                  class="filter-select"
                >
                  <option value="">All Status</option>
                  <option value="available">Available</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
              <div class="filter-item">
                <label class="filter-label">Search</label>
                <input 
                  type="text" 
                  [(ngModel)]="filters.search" 
                  placeholder="Search legal services..."
                  class="filter-input"
                >
              </div>
            </div>
          </div>

          <!-- Services List -->
          <div class="services-grid">
            <div *ngFor="let service of filteredServices" class="service-card">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
              <div class="service-details">
                <p class="service-info">
                  <span class="info-label">Category:</span> {{ service.facility }}
                </p>
                <p class="service-info">
                  <span class="info-label">Provider:</span> {{ service.provider }}
                </p>
                <p class="service-info">
                  <span class="info-label">Status:</span> 
                  <span [class]="'status-badge ' + service.status">
                    {{ formatStatus(service.status) }}
                  </span>
                </p>
                <p class="service-info">
                  <span class="info-label">Contact:</span> {{ service.contactInfo }}
                </p>
              </div>
              <button 
                *ngIf="service.status === 'available'"
                class="request-button"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="contact-section">
            <h2 class="section-title">Available for Consultation</h2>
            <p class="contact-text">
              Let legal stress be our responsibility. Contact us today for professional guidance and powerful representation.
              Available for consultation in Aligarh & Online.
            </p>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <nav class="pagination-nav">
              <button 
                (click)="changePage(currentPage - 1)"
                [disabled]="currentPage === 1"
                class="pagination-button"
              >
                Previous
              </button>
              <button 
                *ngFor="let page of getPageNumbers()"
                (click)="changePage(page)"
                [class.active]="page === currentPage"
                class="pagination-button"
              >
                {{ page }}
              </button>
              <button 
                (click)="changePage(currentPage + 1)"
                [disabled]="currentPage === totalPages"
                class="pagination-button"
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .page-layout {
      min-height: 100vh;
      background-color: var(--neutral-50);
    }

    .page-header {
      background-color: var(--primary-50);
      padding: var(--space-6) 0;
      margin-top: 64px;
    }

    @media (max-width: 640px) {
      .page-header {
        padding: var(--space-4) 0;
        margin-top: 56px; /* Smaller margin for mobile */
      }
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-800);
      margin-bottom: var(--space-3);
    }

    @media (max-width: 640px) {
      .page-title {
        font-size: 1.75rem;
        margin-bottom: var(--space-2);
      }
    }

    .page-description {
      font-size: 1.1rem;
      color: var(--neutral-600);
      max-width: 800px;
    }

    @media (max-width: 640px) {
      .page-description {
        font-size: 1rem;
      }
    }

    .page-content {
      padding: var(--space-8) 0;
    }

    @media (max-width: 640px) {
      .page-content {
        padding: var(--space-4) 0;
      }
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 var(--space-4);
    }

    @media (max-width: 640px) {
      .container {
        padding: 0 var(--space-3);
      }
    }

    .filters {
      margin-bottom: var(--space-8);
    }

    @media (max-width: 640px) {
      .filters {
        margin-bottom: var(--space-4);
      }
    }

    .filters-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-4);
    }

    @media (min-width: 768px) {
      .filters-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .filter-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .filter-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--neutral-700);
    }

    .filter-select,
    .filter-input {
      width: 100%;
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      background-color: white;
      font-size: 0.875rem;
      transition: all 0.2s;
      -webkit-appearance: none; /* Better mobile select styling */
    }

    @media (max-width: 640px) {
      .filter-select,
      .filter-input {
        font-size: 1rem; /* Larger touch targets on mobile */
        padding: var(--space-3) var(--space-4);
      }
    }

    .filter-select:focus,
    .filter-input:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px var(--primary-100);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-6);
      margin-bottom: var(--space-8);
    }

    @media (min-width: 768px) {
      .services-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .services-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-card {
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--space-6);
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    @media (max-width: 640px) {
      .service-card {
        padding: var(--space-4);
        gap: var(--space-3);
      }
    }

    .service-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    @media (hover: none) {
      .service-card:hover {
        transform: none;
        box-shadow: var(--shadow-md);
      }
    }

    .service-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--primary-700);
      margin: 0;
    }

    @media (max-width: 640px) {
      .service-title {
        font-size: 1.125rem;
      }
    }

    .service-description {
      color: var(--neutral-600);
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0;
    }

    @media (max-width: 640px) {
      .service-description {
        font-size: 0.9375rem;
      }
    }

    .service-details {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .service-info {
      font-size: 0.875rem;
      color: var(--neutral-700);
      margin: 0;
      word-break: break-word; /* Prevent text overflow on mobile */
    }

    @media (max-width: 640px) {
      .service-info {
        font-size: 0.9375rem;
      }
    }

    .info-label {
      font-weight: 500;
      color: var(--neutral-800);
    }

    .status-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    @media (max-width: 640px) {
      .status-badge {
        font-size: 0.8125rem;
        padding: 0.375rem 0.875rem;
      }
    }

    .status-badge.available {
      background-color: var(--green-100);
      color: var(--green-800);
    }

    .status-badge.in-progress {
      background-color: var(--blue-100);
      color: var(--blue-800);
    }

    .status-badge.completed {
      background-color: var(--neutral-100);
      color: var(--neutral-800);
    }

    .status-badge.scheduled {
      background-color: var(--purple-100);
      color: var(--purple-800);
    }

    .request-button {
      background-color: var(--primary-600);
      color: white;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      font-weight: 500;
      transition: background-color 0.2s;
      border: none;
      cursor: pointer;
      width: 100%;
      touch-action: manipulation; /* Better touch handling */
    }

    @media (max-width: 640px) {
      .request-button {
        padding: var(--space-3) var(--space-4);
        font-size: 1rem;
      }
    }

    .request-button:hover {
      background-color: var(--primary-700);
    }

    .pagination {
      display: flex;
      justify-content: center;
      margin-top: var(--space-8);
    }

    @media (max-width: 640px) {
      .pagination {
        margin-top: var(--space-6);
      }
    }

    .pagination-nav {
      display: flex;
      gap: var(--space-2);
      flex-wrap: wrap; /* Allow wrapping on small screens */
      justify-content: center;
    }

    .pagination-button {
      padding: var(--space-2) var(--space-4);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      background-color: white;
      color: var(--neutral-700);
      font-size: 0.875rem;
      cursor: pointer;
      transition: all 0.2s;
      min-width: 2.5rem; /* Ensure minimum width for better touch targets */
      text-align: center;
    }

    @media (max-width: 640px) {
      .pagination-button {
        padding: var(--space-3) var(--space-4);
        font-size: 1rem;
        min-width: 3rem;
      }
    }

    .pagination-button:hover:not(:disabled) {
      background-color: var(--neutral-50);
      border-color: var(--neutral-400);
    }

    .pagination-button.active {
      background-color: var(--primary-600);
      color: white;
      border-color: var(--primary-600);
    }

    .pagination-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    /* Prevent text selection on mobile */
    @media (max-width: 640px) {
      .service-card,
      .pagination-button,
      .request-button {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
      }
    }

    .why-choose-us {
      margin-bottom: var(--space-8);
      text-align: center;
    }

    .section-title {
      font-size: 1.75rem;
      font-weight: 600;
      color: var(--primary-700);
      margin-bottom: var(--space-6);
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: var(--space-4);
      margin-top: var(--space-6);
    }

    @media (min-width: 640px) {
      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .features-grid {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    .feature-item {
      background: white;
      padding: var(--space-4);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-item:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    .feature-item h3 {
      color: var(--primary-600);
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: var(--space-2);
    }

    .feature-item p {
      color: var(--neutral-600);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .contact-section {
      margin-top: var(--space-8);
      text-align: center;
      padding: var(--space-6);
      background: var(--primary-50);
      border-radius: var(--radius-lg);
    }

    .contact-text {
      color: var(--neutral-700);
      font-size: 1.125rem;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 640px) {
      .section-title {
        font-size: 1.5rem;
        margin-bottom: var(--space-4);
      }

      .contact-section {
        padding: var(--space-4);
      }

      .contact-text {
        font-size: 1rem;
      }
    }
  `]
})
export class TasksComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Tax & Financial Legal Services',
      description: 'Comprehensive legal solutions for income tax filing, GST compliance, loan settlements, and financial advisory.',
      facility: 'Tax & Financial Matters',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-15',
      contactInfo: 'legal@divyangcare.org'
    },
    {
      id: 2,
      title: 'Registrations & Documentation',
      description: 'Expert assistance with marriage registration, property documentation, trademark registration, and business/NGO registrations.',
      facility: 'Registrations & Documentation',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-10',
      contactInfo: 'docs@divyangcare.org'
    },
    {
      id: 3,
      title: 'Real Estate & Property Law',
      description: 'Professional handling of RERA tribunal matters, property disputes, and real estate registration services.',
      facility: 'Real Estate & Property Law',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-05',
      contactInfo: 'property@divyangcare.org'
    },
    {
      id: 4,
      title: 'Family & Civil Law',
      description: 'Expert guidance in marriage disputes, divorce cases, maintenance, child custody, and domestic violence matters.',
      facility: 'Family & Civil Law',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-20',
      contactInfo: 'family@divyangcare.org'
    },
    {
      id: 5,
      title: 'Corporate & Commercial Law',
      description: 'Comprehensive corporate services including company incorporation, contract drafting, and legal compliance.',
      facility: 'Corporate & Commercial Law',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-25',
      contactInfo: 'corporate@divyangcare.org'
    },
    {
      id: 6,
      title: 'Criminal Law Services',
      description: 'Expert representation in bail applications, criminal trials, cyber crime cases, and IPC-related matters.',
      facility: 'Criminal Law',
      provider: 'Adv. Farheen Ansari',
      status: 'available',
      dueDate: '2025-06-30',
      contactInfo: 'criminal@divyangcare.org'
    }
  ];
  
  availableFacilities = [
    'Tax & Financial Matters',
    'Registrations & Documentation',
    'Real Estate & Property Law',
    'Family & Civil Law',
    'Corporate & Commercial Law',
    'Criminal Law'
  ];
  
  filters = {
    facility: '',
    status: '',
    search: ''
  };
  
  currentPage = 1;
  itemsPerPage = 6;
  
  get filteredServices(): Service[] {
    let result = this.services;
    
    if (this.filters.facility) {
      result = result.filter(service => service.facility === this.filters.facility);
    }
    
    if (this.filters.status) {
      result = result.filter(service => service.status === this.filters.status);
    }
    
    if (this.filters.search) {
      const searchTerm = this.filters.search.toLowerCase();
      result = result.filter(service => 
        service.title.toLowerCase().includes(searchTerm) || 
        service.description.toLowerCase().includes(searchTerm)
      );
    }
    
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return result.slice(start, start + this.itemsPerPage);
  }
  
  get totalPages(): number {
    return Math.ceil(this.services.length / this.itemsPerPage);
  }
  
  formatStatus(status: string): string {
    switch (status) {
      case 'available':
        return 'Available';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'scheduled':
        return 'Scheduled';
      default:
        return status;
    }
  }
  
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }
}