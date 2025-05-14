import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImpactMetric {
  value: number;
  title: string;
  icon: string;
  suffix?: string;
}

@Component({
  selector: 'app-impact-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact-counter.component.html'
})
export class ImpactCounterComponent implements OnInit {
  impactMetrics: ImpactMetric[] = [
    { value: 5000, title: 'Trees Planted', icon: 'nature', suffix: '+' },
    { value: 1200, title: 'Beneficiaries Helped', icon: 'volunteer_activism', suffix: '+' },
    { value: 35, title: 'Courses Offered', icon: 'school', suffix: '' },
    { value: 48, title: 'Districts Covered', icon: 'location_on', suffix: '' }
  ];
  
  ngOnInit() {
    // In a real implementation, you would add animation for counting up
    // This is a placeholder for demonstration purposes
  }
}