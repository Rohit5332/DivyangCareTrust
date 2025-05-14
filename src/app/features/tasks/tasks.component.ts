import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Service {
  id: number;
  title: string;
  description: string;
  facility: string;
  provider: string;
  status: 'available' | 'in-progress' | 'completed' | 'scheduled';
  contactInfo: string;
}

interface Filters {
  facility: string;
  status: string;
  search: string;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  // styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TasksComponent implements OnInit {
  services: Service[] = [
    {
      id: 1,
      title: 'Legal Consultation',
      description: 'Professional legal advice and guidance for your specific needs.',
      facility: 'Legal Services',
      provider: 'DivyangCare Legal Team',
      status: 'available',
      contactInfo: 'legal@divyangcare.org'
    },
    {
      id: 2,
      title: 'Document Review',
      description: 'Thorough review and analysis of legal documents and contracts.',
      facility: 'Legal Services',
      provider: 'DivyangCare Legal Team',
      status: 'in-progress',
      contactInfo: 'legal@divyangcare.org'
    },
    {
      id: 3,
      title: 'Court Representation',
      description: 'Professional representation in court proceedings.',
      facility: 'Legal Services',
      provider: 'DivyangCare Legal Team',
      status: 'scheduled',
      contactInfo: 'legal@divyangcare.org'
    }
  ];

  filters: Filters = {
    facility: '',
    status: '',
    search: ''
  };

  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;

  get availableFacilities(): string[] {
    return [...new Set(this.services.map(service => service.facility))];
  }

  get filteredServices(): Service[] {
    let filtered = this.services;

    if (this.filters.facility) {
      filtered = filtered.filter(service => 
        service.facility === this.filters.facility
      );
    }

    if (this.filters.status) {
      filtered = filtered.filter(service => 
        service.status === this.filters.status
      );
    }

    if (this.filters.search) {
      const searchLower = this.filters.search.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.provider.toLowerCase().includes(searchLower)
      );
    }

    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(start, start + this.itemsPerPage);
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  formatStatus(status: string): string {
    return status.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  ngOnInit(): void {
    // Initialize component
  }
}