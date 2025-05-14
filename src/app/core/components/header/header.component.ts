import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html'
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
  }
  
  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }

  toggleAuthDropdown() {
    this.authDropdownOpen = !this.authDropdownOpen;
  }

  closeAuthDropdown() {
    this.authDropdownOpen = false;
  }
}