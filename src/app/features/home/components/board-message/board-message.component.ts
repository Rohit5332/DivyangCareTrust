import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BoardMessage {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

@Component({
  selector: 'app-board-message',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="board-message-section">
      <div class="container">
        <h2 class="section-title">Message from Our Board</h2>
        <div *ngIf="carousel; else staticList" class="carousel">
          <button class="carousel-btn left" (click)="prev()">&#8592;</button>
          <div class="carousel-content">
            <div class="board-message-card" *ngFor="let msg of [currentMessage]">
              <div class="board-image">
                <img [src]="msg.image" [alt]="msg.name" />
              </div>
              <div class="board-details">
                <h4>{{ msg.name }}</h4>
                <p class="role">{{ msg.role }}</p>
                <p class="message">"{{ msg.message }}"</p>
              </div>
            </div>
          </div>
          <button class="carousel-btn right" (click)="next()">&#8594;</button>
        </div>
        <ng-template #staticList>
          <div class="board-message-list">
            <div class="board-message-card" *ngFor="let msg of boardMessages">
              <div class="board-image">
                <img [src]="msg.image" [alt]="msg.name" />
              </div>
              <div class="board-details">
                <h4>{{ msg.name }}</h4>
                <p class="role">{{ msg.role }}</p>
                <p class="message">"{{ msg.message }}"</p>
              </div>
            </div>
          </div>
        </ng-template>
      </div>
    </section>
  `,
  styles: [
    `.board-message-section {
      background: var(--neutral-100);
      padding: var(--space-6) 0;
      border-top: 1px solid var(--neutral-200);
    }
    .section-title {
      text-align: center;
      color: var(--primary-800);
      margin-bottom: var(--space-4);
    }
    .carousel {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-3);
    }
    .carousel-content {
      min-width: 300px;
      max-width: 500px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .board-message-list {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-4);
      justify-content: center;
    }
    .board-message-card {
      background: white;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-md);
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 100%;
      max-width: 350px;
    }
    .board-image img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: var(--space-2);
    }
    .board-details h4 {
      margin: 0;
      color: var(--primary-700);
    }
    .board-details .role {
      color: var(--neutral-600);
      font-size: 0.95rem;
      margin-bottom: var(--space-2);
    }
    .board-details .message {
      color: var(--neutral-800);
      font-style: italic;
      font-size: 1.1rem;
    }
    .carousel-btn {
      background: var(--primary-100);
      border: none;
      border-radius: 50%;
      width: 36px;
      height: 36px;
      font-size: 1.5rem;
      color: var(--primary-700);
      cursor: pointer;
      transition: background 0.2s;
    }
    .carousel-btn:hover {
      background: var(--primary-300);
    }
    @media (max-width: 600px) {
      .board-message-list {
        flex-direction: column;
        align-items: center;
      }
      .board-message-card {
        max-width: 100%;
      }
    }
    `
  ]
})
export class BoardMessageComponent {
  @Input() carousel = true;

  boardMessages: BoardMessage[] = [
    {
      id: 1,
      name: 'Rahul Gupta',
      role: 'Board Member',
      image: '',
      message: 'At DivyangCareTrust, our mission is to empower lives and enrich the earth. We are committed to creating opportunities for all.'
    },
    {
      id: 2,
      name: 'Adv. Farheen',
      role: 'Chairperson',
      image: '',
      message: 'We believe in the power of community and compassion. Together, we can make a lasting impact.'
    },
    {
      id: 3,
      name: 'Adv. Salim',
      role: 'Chairperson',
      image: '',
      message: 'We believe in the power of community and compassion. Together, we can make a lasting impact.'
    },
    {
      id: 4,
      name: 'Vishal Sharma',
      role: 'Chairperson',
      image: '',
      message: 'We believe in the power of community and compassion. Together, we can make a lasting impact.'
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