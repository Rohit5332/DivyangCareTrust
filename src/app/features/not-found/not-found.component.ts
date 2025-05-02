import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-layout">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center">
          <h1 class="text-3xl font-bold mb-6">404 - Page Not Found</h1>
          <p class="mb-4">The page you are looking for does not exist.</p>
          <a routerLink="/" class="btn btn-primary">Return to Home</a>
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
export class NotFoundComponent {}