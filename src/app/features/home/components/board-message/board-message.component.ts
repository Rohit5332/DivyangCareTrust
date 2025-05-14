import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BoardMessage {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
  facilities: string[];
}

@Component({
  selector: 'app-board-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board-message.component.html',
  // styleUrls: ['./board-message.component.scss']
})
export class BoardMessageComponent {
  @Input() carousel = true;

  boardMessages: BoardMessage[] = [
    {
      id: 1,
      name: 'Rahul Gupta',
      role: 'Board Member',
      image: '',
      message: 'At DivyangCareTrust, our mission is to empower lives and enrich the earth. We are committed to creating opportunities for all.',
      facilities: ['Community Development', 'Educational Programs']
    },
    {
      id: 2,
      name: 'Adv. Farheen Ansari',
      role: 'Legal Services Director',
      image: '',
      message: 'Providing comprehensive legal solutions with expertise in tax, property, family, corporate, and criminal law. Committed to delivering personalized legal services with integrity and professionalism.',
      facilities: [
        'Tax & Financial Legal Services',
        'Registrations & Documentation',
        'Real Estate & Property Law',
        'Family & Civil Law'
      ]
    }
  ];

  currentIndex = 0;

  get currentMessage() {
    return this.boardMessages[this.currentIndex];
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.boardMessages.length) % this.boardMessages.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.boardMessages.length;
  }
}