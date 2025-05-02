import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProgramHighlightsComponent } from './components/program-highlights/program-highlights.component';
import { ImpactCounterComponent } from './components/impact-counter/impact-counter.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { BoardMessageComponent } from './components/board-message/board-message.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    HeroSectionComponent, 
    ProgramHighlightsComponent, 
    ImpactCounterComponent, 
    TestimonialsComponent, 
    CallToActionComponent,
    BoardMessageComponent
  ],
  template: `
    <div class="page-layout">
      <app-hero-section></app-hero-section>
      <app-program-highlights></app-program-highlights>
      <app-impact-counter></app-impact-counter>
      <app-testimonials></app-testimonials>
      <app-call-to-action></app-call-to-action>
      <app-board-message></app-board-message>
    </div>
  `,
  styles: []
})
export class HomeComponent {
}