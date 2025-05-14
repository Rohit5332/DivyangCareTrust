import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './call-to-action.component.html'
})
export class CallToActionComponent {
}