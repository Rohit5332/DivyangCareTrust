import { Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'DivyangCareTrust - Home'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'About Us - DivyangCareTrust'
  },
  {
    path: 'programs',
    loadComponent: () => import('./features/programs/programs.component').then(m => m.ProgramsComponent),
    title: 'Our Programs - DivyangCareTrust'
  },
  {
    path: 'gallery',
    loadComponent: () => import('./features/gallery/gallery.component').then(m => m.GalleryComponent),
    title: 'Gallery - DivyangCareTrust'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us - DivyangCareTrust'
  },
  {
    path: 'tasks',
    loadComponent: () => import('./features/tasks/tasks.component').then(m => m.TasksComponent),
    title: 'Tasks - DivyangCareTrust'
  },
  {
    path: 'donate',
    loadComponent: () => import('./features/donation/donation.component').then(m => m.DonationComponent),
    title: 'Donate - DivyangCareTrust'
  },
  {
    path: 'volunteer',
    loadComponent: () => import('./features/volunteer/volunteer.component').then(m => m.VolunteerComponent),
    title: 'Volunteer - DivyangCareTrust'
  },
  // {
  //   path: 'admin',
  //   loadComponent: () => import('./features/admin/admin.component').then(m => m.AdminComponent),
  //   title: 'Admin Panel - DivyangCareTrust'
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
  //   title: 'Login - DivyangCareTrust'
  // },
  // {
  //   path: 'register',
  //   loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
  //   title: 'Register - DivyangCareTrust'
  // },
  {
    path: '**',
    loadComponent: () => import('./core/components/not-found/not-found.component').then(m => m.NotFoundComponent),
    title: 'Page Not Found - DivyangCareTrust'
  }
];