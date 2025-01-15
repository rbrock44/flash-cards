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
  settings: StartSettings = {
    showQuestionFirst: true,
    isIndexOrder: true,
    showExampleAutomatically: true,
  };
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
  }

  homeClick(): void {
    this.flashCardReady = false;
    this.selectedCategory = undefined;
    this.selectedSubCategory = undefined;
  }

  startFlashCards(settings: StartSettings) {
    this.settings = settings;
    if (settings.isIndexOrder) {
      this.flashCards = this.selectedSubCategory!.flashCards;
    } else {
      this.flashCards = this.shuffleArray(this.selectedSubCategory!.flashCards);
    }

    this.flashCardReady = true;
  }

  shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
  }

  showExample(): boolean {
    return this.selectedSubCategory ? this.selectedSubCategory.flashCards.filter(x => x.example != '').length > 0 : false;
  }
}
