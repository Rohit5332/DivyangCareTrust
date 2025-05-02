import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-layout">
      <section class="gallery-hero">
        <div class="container">
          <h1>Gallery</h1>
          <p class="subtitle">Capturing moments of impact and community</p>
        </div>
      </section>

      <section class="gallery-content">
        <div class="container">
          <div class="gallery-filters">
            <button class="filter-btn active" (click)="filterGallery('all')">All</button>
            <button class="filter-btn" (click)="filterGallery('plantation')">Plantation</button>
            <button class="filter-btn" (click)="filterGallery('events')">Events</button>
            <button class="filter-btn" (click)="filterGallery('workshops')">Workshops</button>
          </div>

          <div class="gallery-grid">
            @for (item of filteredGalleryItems; track item.id) {
              <div class="gallery-item">
                <img [src]="item.imageUrl" [alt]="item.title" loading="lazy">
                <div class="gallery-caption">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .gallery-hero {
      background-color: var(--primary-50);
      padding: var(--space-8) 0;
      text-align: center;
    }

    .gallery-hero h1 {
      font-size: 3rem;
      color: var(--primary-800);
      margin-bottom: var(--space-3);
    }

    .subtitle {
      font-size: 1.2rem;
      color: var(--neutral-600);
      max-width: 600px;
      margin: 0 auto;
    }

    .gallery-content {
      padding: var(--space-8) 0;
    }

    .gallery-filters {
      display: flex;
      justify-content: center;
      gap: var(--space-2);
      margin-bottom: var(--space-6);
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: var(--space-2) var(--space-4);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      background-color: white;
      color: var(--neutral-700);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .filter-btn:hover, .filter-btn.active {
      background-color: var(--primary-50);
      color: var(--primary-700);
      border-color: var(--primary-300);
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: var(--space-4);
    }

    .gallery-item {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: transform 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
    }

    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      display: block;
    }

    .gallery-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: var(--space-4);
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
      color: white;
    }

    .gallery-caption h3 {
      margin: 0 0 var(--space-1);
      font-size: 1.2rem;
    }

    .gallery-caption p {
      margin: 0;
      font-size: 0.9rem;
      opacity: 0.9;
    }
  `]
})
export class GalleryComponent {
  selectedCategory: string = 'all';
  
  galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Tree Plantation Drive',
      description: 'Community members planting trees together',
      imageUrl: 'assets/images/gallery/groupPhotoGallery1.jpg',
      category: 'plantation'
    },
    {
      id: 2,
      title: 'Green Initiative',
      description: 'Creating a sustainable environment',
      imageUrl: 'assets/images/gallery/villageMeetingGallery2.jpg',
      category: 'plantation'
    },
    {
      id: 3,
      title: 'Community Planting',
      description: 'Working together for a greener future',
      imageUrl: 'assets/images/gallery/plantation-3.jpg',
      category: 'plantation'
    },
    {
      id: 4,
      title: 'Environmental Awareness',
      description: 'Educating about the importance of trees',
      imageUrl: 'assets/images/gallery/plantation-4.jpg',
      category: 'plantation'
    },
    {
      id: 5,
      title: 'Urban Greening',
      description: 'Making cities greener one tree at a time',
      imageUrl: 'assets/images/gallery/plantation-5.jpg',
      category: 'plantation'
    },
    {
      id: 6,
      title: 'Rural Development',
      description: 'Planting trees in rural communities',
      imageUrl: 'assets/images/gallery/plantation-6.jpg',
      category: 'plantation'
    }
  ];

  get filteredGalleryItems(): GalleryItem[] {
    if (this.selectedCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.selectedCategory);
  }

  filterGallery(category: string) {
    this.selectedCategory = category;
  }
}