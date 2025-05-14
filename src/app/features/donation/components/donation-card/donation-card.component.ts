import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationOption } from '../../../../services/donation.service';

@Component({
  selector: 'app-donation-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-card.component.html',
  styleUrls: ['./donation-card.component.scss']
})
export class DonationCardComponent {
  @Input() option!: DonationOption;
  @Input() isSelected: boolean = false;
  @Output() selected = new EventEmitter<DonationOption>();
  
  selectDonation() {
    this.selected.emit(this.option);
  }
} 