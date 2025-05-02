import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/services/api.service';
import { HttpClient } from '@angular/common/http';

export interface GalleryItem {
  id?: number;
  title: string;
  description?: string;
  imageUrl: string;
  category: string;
  date: Date;
  tags?: string[];
}

export interface GalleryCategory {
  id: number;
  name: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends ApiService {
  private readonly endpoint = '/api/gallery';

  constructor(http: HttpClient) {
    super(http);
  }

  getGalleryItems(): Observable<GalleryItem[]> {
    return this.get<GalleryItem[]>(this.endpoint);
  }

  getGalleryItem(id: number): Observable<GalleryItem> {
    return this.get<GalleryItem>(`${this.endpoint}/${id}`);
  }

  getGalleryItemsByCategory(category: string): Observable<GalleryItem[]> {
    return this.get<GalleryItem[]>(`${this.endpoint}/category/${category}`);
  }

  uploadGalleryItem(item: GalleryItem): Observable<GalleryItem> {
    return this.post<GalleryItem>(this.endpoint, item);
  }

  updateGalleryItem(id: number, item: GalleryItem): Observable<GalleryItem> {
    return this.put<GalleryItem>(`${this.endpoint}/${id}`, item);
  }

  deleteGalleryItem(id: number): Observable<void> {
    return this.delete<void>(`${this.endpoint}/${id}`);
  }

  getCategories(): Observable<GalleryCategory[]> {
    return this.get<GalleryCategory[]>(`${this.endpoint}/categories`);
  }

  createCategory(category: GalleryCategory): Observable<GalleryCategory> {
    return this.post<GalleryCategory>(`${this.endpoint}/categories`, category);
  }
} 