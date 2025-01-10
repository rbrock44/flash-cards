import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Meeting } from '../../type/flash-card.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmation-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './confirmation-popup.component.html',
  styleUrl: './confirmation-popup.component.scss'
})
export class ConfirmationPopupComponent {
  @Output() confirmed = new EventEmitter<boolean>()

  showPopup: boolean = false;
  meeting: Meeting = {
      id: undefined,
      date: '',
      startTime: '',
      endTime: '',
      title: '',
      person: ''
    };

  openPopup(meeting: Meeting) {
    this.meeting = meeting;
    this.showPopup = true;
  }

  closePopup(confirmed: boolean = false) {
    this.confirmed.emit(confirmed);
    this.showPopup = false;
  }
}
