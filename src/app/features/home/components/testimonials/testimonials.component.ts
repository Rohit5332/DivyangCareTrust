import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  // styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The plantation drive organized by DivyangCareTrust changed my perspective on how I can contribute to the environment despite my disability. They provided all the support I needed.",
      author: "Rahul Gupta",
      role: "Board Member",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      quote: "The learning courses offered by DivyangCareTrust helped me gain skills that I could use to earn a living. Their inclusive approach makes education accessible to everyone.",
      author: "Rahul Patel",
      role: "Course Graduate",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      quote: "As a volunteer, I've witnessed the incredible impact DivyangCareTrust has on the community. Their commitment to empowering differently-abled individuals is truly inspiring.",
      author: "Anita Desai",
      role: "Volunteer",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
}