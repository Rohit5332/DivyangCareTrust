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
  templateUrl: './tasks.component.html'
})
export class TasksComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Legal Consultation',
      description: 'Professional legal advice and guidance for your specific needs.',
      facility: 'Legal Services',
      provider: 'Adv. John Smith',
      status: 'available',
      dueDate: '2024-03-20',
      contactInfo: '+91 98765 43210'
    },
    {
      id: 2,
      title: 'Document Review',
      description: 'Thorough review and analysis of legal documents.',
      facility: 'Document Services',
      provider: 'Adv. Sarah Johnson',
      status: 'in-progress',
      dueDate: '2024-03-18',
      contactInfo: '+91 98765 43211'
    },
    {
      id: 3,
      title: 'Court Representation',
      description: 'Professional representation in court proceedings.',
      facility: 'Legal Services',
      provider: 'Adv. Michael Brown',
      status: 'scheduled',
      dueDate: '2024-03-25',
      contactInfo: '+91 98765 43212'
    },
    {
      id: 4,
      title: 'Legal Documentation',
      description: 'Preparation and filing of legal documents.',
      facility: 'Document Services',
      provider: 'Adv. Emily Davis',
      status: 'completed',
      dueDate: '2024-03-15',
      contactInfo: '+91 98765 43213'
    }
  ];

  availableFacilities = [
    'Legal Services',
    'Document Services',
    'Financial Services',
    'Healthcare Services'
  ];

  filters = {
    facility: '',
    status: '',
    search: ''
  };

  currentPage = 1;
  itemsPerPage = 6;

  get filteredServices(): Service[] {
    let filtered = [...this.services];

    if (this.filters.facility) {
      filtered = filtered.filter(service => service.facility === this.filters.facility);
    }

    if (this.filters.status) {
      filtered = filtered.filter(service => service.status === this.filters.status);
    }

    if (this.filters.search) {
      const searchLower = this.filters.search.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.provider.toLowerCase().includes(searchLower)
      );
    }

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.services.length / this.itemsPerPage);
  }

  formatStatus(status: string): string {
    return status
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
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