import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BoardMessageComponent } from '../home/components/board-message/board-message.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  // styleUrls: ['./about.component.css'],
  standalone: true,
  imports: [CommonModule, RouterLink, BoardMessageComponent]
})
export class AboutComponent {
  // Component logic can be added here if needed
}
