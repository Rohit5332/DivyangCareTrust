import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [class.scrolled]="scrolled()">
      <div class="container header-container">
        <div class="logo">
          <a routerLink="/">
            <img src="assets/dicatlogo.jpg" alt="Dicat Logo" class="logo-image">
            <span class="logo-text">DivyangCareTrust</span>
          </a>
        </div>
        
        <div class="nav-container">
          <nav class="desktop-nav">
            <ul>
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
              <li><a routerLink="/about" routerLinkActive="active">About Us</a></li>
              <li><a routerLink="/programs" routerLinkActive="active">Programs</a></li>
              <li><a routerLink="/gallery" routerLinkActive="active">Gallery</a></li>
              <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
              <li><a routerLink="/tasks" routerLinkActive="active">Tasks</a></li>
              <li><a routerLink="/volunteer" routerLinkActive="active">Volunteer</a></li>
              <li><a routerLink="/donate" class="donate-btn" routerLinkActive="active">Donate</a></li>
            </ul>
          </nav>
          
          <div class="auth-buttons desktop-only auth-dropdown">
            <button class="btn btn-secondary dropdown-toggle" (click)="toggleAuthDropdown()" [attr.aria-expanded]="authDropdownOpen">
              Login
              <span class="material-symbols-outlined" style="font-size: 1.2em;">expand_more</span>
            </button>
            <div class="dropdown-menu" *ngIf="authDropdownOpen">
              <a routerLink="/login" (click)="closeAuthDropdown()">Login</a>
              <a routerLink="/register" (click)="closeAuthDropdown()">Register</a>
            </div>
          </div>
        </div>
        
        <button class="mobile-menu-button" (click)="toggleMobileMenu()" aria-label="Toggle menu">
          <span class="material-symbols-outlined">{{ mobileMenuOpen() ? 'close' : 'menu' }}</span>
        </button>
      </div>
      
      <div class="mobile-menu" [class.open]="mobileMenuOpen()">
        <button class="mobile-menu-close" (click)="closeMobileMenu()" aria-label="Close menu">
          <span class="material-symbols-outlined">close</span>
        </button>
        <nav>
          <ul>
            <li><a routerLink="/" (click)="closeMobileMenu()">Home</a></li>
            <li><a routerLink="/about" (click)="closeMobileMenu()">About Us</a></li>
            <li><a routerLink="/programs" (click)="closeMobileMenu()">Programs</a></li>
            <li><a routerLink="/gallery" (click)="closeMobileMenu()">Gallery</a></li>
            <li><a routerLink="/contact" (click)="closeMobileMenu()">Contact</a></li>
            <li><a routerLink="/tasks" (click)="closeMobileMenu()">Tasks</a></li>
            <li><a routerLink="/volunteer" (click)="closeMobileMenu()">Volunteer</a></li>
            <li><a routerLink="/donate" class="donate-btn" (click)="closeMobileMenu()">Donate</a></li>
          </ul>
          <div class="auth-buttons mobile-auth">
            <a routerLink="/login" class="btn btn-secondary" (click)="closeMobileMenu()">Login</a>
            <a routerLink="/register" class="btn btn-primary" (click)="closeMobileMenu()">Register</a>
          </div>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.98);
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
      padding: var(--space-2) 0;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    header.scrolled {
      background-color: rgba(255, 255, 255, 0.98);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 var(--space-4);
    }
    
    .logo {
      font-weight: 700;
      font-size: 1.5rem;
      flex-shrink: 0;
      margin-right: var(--space-8);
    }
    
    .logo a {
      color: var(--primary-800);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }
    
    .logo-image {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 50%;
    }
    
    .logo-text {
      margin-left: var(--space-1);
    }

    .nav-container {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      flex-grow: 1;
      justify-content: flex-end;
    }
    
    .desktop-nav {
      display: none;
    }
    
    @media (min-width: 992px) {
      .desktop-nav {
        display: block;
      }
    }
    
    .desktop-nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: var(--space-4);
    }
    
    .desktop-nav a {
      color: var(--neutral-800);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: var(--space-1) 0;
      white-space: nowrap;
      cursor: pointer;
    }
    
    .desktop-nav a:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--primary-600);
      transition: width 0.3s ease;
    }
    
    .desktop-nav a:hover:after, .desktop-nav a.active:after {
      width: 100%;
    }

    .donate-btn {
      color: var(--primary-600) !important;
      font-weight: 600 !important;
      background-color: var(--primary-50);
      padding: var(--space-1) var(--space-3) !important;
      border-radius: var(--radius-md);
      transition: all 0.3s ease;
      cursor: pointer;
      display: inline-block;
    }

    .donate-btn:hover {
      background-color: var(--primary-100);
      transform: translateY(-2px);
    }
    
    .auth-buttons {
      display: flex;
      gap: var(--space-2);
    }
    
    .desktop-only {
      display: none;
    }
    
    @media (min-width: 992px) {
      .desktop-only {
        display: flex;
      }
    }
    
    .mobile-menu-button {
      background: none;
      border: none;
      color: var(--neutral-800);
      font-size: 1.5rem;
      cursor: pointer;
      padding: var(--space-1);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    @media (min-width: 992px) {
      .mobile-menu-button {
        display: none;
      }
    }
    
    .mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: white;
      z-index: 9999;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      padding: var(--space-8) var(--space-4);
      overflow-y: auto;
    }
    
    .mobile-menu.open {
      transform: translateX(0);
    }
    
    .mobile-menu nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    .mobile-menu nav ul li {
      margin-bottom: var(--space-4);
    }
    
    .mobile-menu nav ul li a {
      color: var(--neutral-800);
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      display: block;
      padding: var(--space-2) 0;
      cursor: pointer;
    }
    
    .mobile-auth {
      margin-top: var(--space-6);
      flex-direction: column;
    }
    
    .mobile-auth a {
      width: 100%;
      text-align: center;
    }

    .btn {
      display: inline-block;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-md);
      font-weight: 500;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn-primary {
      background-color: var(--primary-600);
      color: white;
    }

    .btn-primary:hover {
      background-color: var(--primary-700);
    }

    .btn-secondary {
      background-color: var(--neutral-100);
      color: var(--neutral-800);
    }

    .btn-secondary:hover {
      background-color: var(--neutral-200);
    }

    .auth-dropdown {
      position: relative;
    }

    .dropdown-toggle {
      display: flex;
      align-items: center;
      gap: 0.3em;
    }

    .dropdown-menu {
      position: absolute;
      top: 110%;
      right: 0;
      background: white;
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-md);
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      min-width: 120px;
      z-index: 1001;
      display: flex;
      flex-direction: column;
    }

    .dropdown-menu a {
      padding: 0.7em 1.2em;
      color: var(--neutral-800);
      text-decoration: none;
      font-weight: 500;
      transition: background 0.2s;
    }

    .dropdown-menu a:hover {
      background: var(--primary-50);
    }

    @media (max-width: 600px) {
      .logo-image {
        height: 50px;
        width: 50px;
      }
      .logo-text {
        font-size: 1rem;
      }
      .header-container {
        padding: 0 var(--space-1);
      }
    }

    .mobile-menu-close {
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      color: var(--neutral-800);
      font-size: 2rem;
      cursor: pointer;
      z-index: 10001;
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