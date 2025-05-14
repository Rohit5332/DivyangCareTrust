import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-program-highlights',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './program-highlights.component.html',
  styleUrls: ['./program-highlights.component.scss']
})
export class ProgramHighlightsComponent {
}