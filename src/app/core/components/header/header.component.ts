import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
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
      @apply fixed inset-0 bg-white z-50 transform transition-transform duration-300;
      &.open {
        @apply translate-x-0;
      }
      &.closed {
        @apply translate-x-full;
      }
    }
  `]
})
export class HeaderComponent {
  scrolled = signal(false);
  mobileMenuOpen = signal(false);
  authDropdownOpen = false;
  
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled.set(window.scrollY > 0);
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