import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {getFlashCards} from "./services/flash-card.service";
import {FlashCard, FlashcardsData, MainCategory, StartSettings, SubCategory} from "./type/flash-card.type";
import {CommonModule} from "@angular/common";
import {FlashCardsComponent} from "./components/flash-cards/flash-cards.component";
import {StartPopupComponent} from "./components/start-popup/start-popup.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FlashCardsComponent,
    StartPopupComponent
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('startPopup') startPopup!: StartPopupComponent;
  title = 'flash-cards';
  selectedCategory: MainCategory | undefined = undefined;
  selectedSubCategory: SubCategory | undefined = undefined;
  flashCards: FlashCard[] = [];
  data: FlashcardsData = { categories: [] };
  settings: StartSettings = { showQuestionFirst: true, isIndexOrder: true};
  flashCardReady: boolean = false;

  ngOnInit(): void {
    getFlashCards().then((response) => {
      this.data = response;
    });
  }

  toggleCategory(category: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'LI') {
      return;
    }

    if (this.selectedCategory === category) {
      this.selectedCategory = undefined;
    } else {
      this.selectedCategory = category;
    }
  }

  subCategoryClick(subCategory: SubCategory) {
    this.selectedSubCategory = subCategory;
    this.startPopup.openPopup(subCategory);

    this.flashCards = subCategory.flashCards;

    this.flashCardReady = true;
  }

  homeClick(): void {
    this.flashCardReady = false;
    this.selectedCategory = undefined;
    this.selectedSubCategory = undefined;
  }

  startFlashCards(settings: StartSettings) {
    this.settings = settings;
    // TODO: order flashcards based on settings
    this.flashCards = this.selectedSubCategory!.flashCards;

    this.flashCardReady = true;
  }
}
