import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  description: string;
  category: string;
  reward: number;
  status: 'open' | 'in-progress' | 'completed' | 'approved';
  dueDate: string;
}

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  template: `
    <div class="page-layout">
      <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Tasks</h1>
        <div class="prose max-w-none">
          <p class="mb-4">
            View and manage tasks related to our various programs and initiatives.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Create blog content about plantation benefits',
      description: 'Write a 1000-word blog post about the environmental and social benefits of plantation drives.',
      category: 'content',
      reward: 500,
      status: 'open',
      dueDate: '2025-06-15'
    },
    {
      id: 2,
      title: 'Design poster for upcoming goodies distribution event',
      description: 'Create a visually appealing poster that highlights our upcoming event for distributing aids to differently-abled individuals.',
      category: 'design',
      reward: 700,
      status: 'in-progress',
      dueDate: '2025-06-10'
    },
    {
      id: 3,
      title: 'Research on accessible learning methodologies',
      description: 'Conduct research on innovative learning methodologies for differently-abled individuals and compile a report.',
      category: 'research',
      reward: 800,
      status: 'completed',
      dueDate: '2025-06-05'
    },
    {
      id: 4,
      title: 'Create social media content for plantation campaign',
      description: 'Develop engaging social media posts to promote our upcoming plantation drive across platforms.',
      category: 'content',
      reward: 450,
      status: 'open',
      dueDate: '2025-06-20'
    },
    {
      id: 5,
      title: 'Contact potential sponsors for educational programs',
      description: 'Reach out to companies and organizations that might be interested in sponsoring our educational initiatives.',
      category: 'outreach',
      reward: 600,
      status: 'approved',
      dueDate: '2025-06-12'
    },
    {
      id: 6,
      title: 'Create instructional videos for online courses',
      description: 'Develop clear and accessible instructional videos for our online certification courses.',
      category: 'content',
      reward: 900,
      status: 'open',
      dueDate: '2025-06-25'
    }
  ];
  
  filters = {
    category: '',
    status: '',
    search: ''
  };
  
  currentPage = 1;
  itemsPerPage = 6;
  
  get filteredTasks(): Task[] {
    let result = this.tasks;
    
    if (this.filters.category) {
      result = result.filter(task => task.category === this.filters.category);
    }
    
    if (this.filters.status) {
      result = result.filter(task => task.status === this.filters.status);
    }
    
    if (this.filters.search) {
      const searchTerm = this.filters.search.toLowerCase();
      result = result.filter(task => 
        task.title.toLowerCase().includes(searchTerm) || 
        task.description.toLowerCase().includes(searchTerm)
      );
    }
    
    // For pagination, we'll slice the results
    // In a real app, this would be handled server-side
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return result.slice(start, start + this.itemsPerPage);
  }
  
  get totalPages(): number {
    return Math.ceil(this.tasks.length / this.itemsPerPage);
  }
  
  formatStatus(status: string): string {
    switch (status) {
      case 'open':
        return 'Open';
      case 'in-progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'approved':
        return 'Approved';
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