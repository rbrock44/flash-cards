import {CommonModule} from '@angular/common';
import {Component, Input} from '@angular/core';
import {FlashCard} from '../../type/flash-card.type';

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
  @Input() showExampleAutomatically: boolean = true;

  isQuestionVisible: boolean = this.showQuestionFirst;
  isExampleVisible: boolean = this.showExampleAutomatically;

  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.resetQuestionAnswer();
    } else {
      // set to end ??
    }
  }

  goToNext() {
    if (this.currentIndex < this.flashCards.length - 1) {
      this.currentIndex++;
      this.resetQuestionAnswer();
    } else {
      // reshuffle cards
    }
  }

  toggleQuestionAnswer(event: any) {
    console.log(event)
    if (event.target.classList.contains('example-button')) {
      return;
    }
    this.isQuestionVisible = !this.isQuestionVisible;
  }

  toggleExample(event: any) {
    event.preventDefault();
    this.isExampleVisible = !this.isExampleVisible;
  }

  resetQuestionAnswer() {
    this.isQuestionVisible = this.showQuestionFirst;
  }
}
