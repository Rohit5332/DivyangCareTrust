import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  styles: [`
    :host {
      display: block;
    }
    
    header {
      &.scrolled {
        @apply shadow-md;
      }
    }
    
    .active {
      @apply text-primary-600 font-medium;
    }

    .mobile-menu {
      @apply fixed inset-0 bg-white z-50;
    }
  `]
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);
  authDropdownOpen = false;
  
  constructor() {
    // Debounced scroll handling
    fromEvent(window, 'scroll')
      .pipe(debounceTime(10))
      .subscribe(() => {
        this.scrolled.set(window.scrollY > 0);
      });
  }
  
  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
    if (this.mobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  toggleAuthDropdown() {
    this.authDropdownOpen = !this.authDropdownOpen;
  }

  closeAuthDropdown() {
    this.authDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.auth-buttons')) {
      this.authDropdownOpen = false;
    }
  }
}