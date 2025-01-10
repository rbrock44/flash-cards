import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StartSettings, SubCategory} from "../../type/flash-card.type";

@Component({
  selector: 'app-start-popup',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './start-popup.component.html',
  styleUrl: './start-popup.component.scss'
})
export class StartPopupComponent {
  subCategory: SubCategory = {
    id: '',
    name: '',
    flashCards: []
  }
  @Output() startFlashCards = new EventEmitter<StartSettings>();
  showPopup: boolean = false;

  openPopup(subCategory: SubCategory) {
    this.subCategory = subCategory;
    this.showPopup = true;
  }

  closePopup() {
    this.startFlashCards.emit({
      showQuestionFirst: true,
      isIndexOrder: true
    })
    this.showPopup = false;
  }
}
