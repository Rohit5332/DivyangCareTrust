import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const MOCK_GALLERY_ITEMS: GalleryItem[] = [
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

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends ApiService {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    // For now, return mock data. Replace with actual API call later
    return of(MOCK_GALLERY_ITEMS);
  }

  getGalleryItemById(id: number): Observable<GalleryItem | undefined> {
    return of(MOCK_GALLERY_ITEMS.find(item => item.id === id));
  }

  getGalleryItemsByCategory(category: string): Observable<GalleryItem[]> {
    // Filter mock data locally
    return of(MOCK_GALLERY_ITEMS.filter(item => item.category === category));
  }
} 