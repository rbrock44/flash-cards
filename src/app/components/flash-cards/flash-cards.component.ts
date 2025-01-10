import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashCard } from '../../type/flash-card.type';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.scss'],
})
export class FlashCardsComponent {
  @Input() flashCards: FlashCard[] = [];
  currentIndex: number = 0; // Initialize at 0 for the first flashcard
  @Input() showQuestionFirst: boolean = true;

  isQuestionVisible: boolean = this.showQuestionFirst;

  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // set to end ??
    }
  }

  goToNext() {
    if (this.currentIndex < this.flashCards.length - 1) {
      this.currentIndex++;
    } else {
      // reshuffle cards
    }
  }

  toggleQuestionAnswer() {
    this.isQuestionVisible = !this.isQuestionVisible;
  }
}
