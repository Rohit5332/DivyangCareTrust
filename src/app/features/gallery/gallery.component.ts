import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService, GalleryItem } from '../../core/services/gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent implements OnInit {
  selectedCategory: string = 'all';
  galleryItems: GalleryItem[] = [];
  filteredGalleryItems: GalleryItem[] = [];

  constructor(private galleryService: GalleryService) {}

  ngOnInit() {
    this.loadGalleryItems();
  }

  loadGalleryItems() {
    this.galleryService.getGalleryItems().subscribe((items: GalleryItem[]) => {
      this.galleryItems = items;
      this.filterGallery(this.selectedCategory);
    });
  }

  filterGallery(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredGalleryItems = this.galleryItems;
    } else {
      this.galleryService.getGalleryItemsByCategory(category).subscribe((items: GalleryItem[]) => {
        this.filteredGalleryItems = items;
      });
    }
  }
}