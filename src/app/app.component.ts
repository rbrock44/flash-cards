import {Component, OnInit, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {getFlashCards} from "./services/flash-card.service";
import {FlashCard, FlashcardsData, MainCategory, StartSettings, SubCategory} from "./type/flash-card.type";
import {CommonModule, Location} from "@angular/common";
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
  cardIndex = 0;

  categoryUrlParam: string = 'category';
  subCategoryUrlParam: string = 'subCategory';
  showQuestionUrlParam: string = 'showQuestionFirst';
  isIndexOrderUrlParam: string = 'isIndexOrder';
  showExampleUrlParam: string = 'showExampleAutomatically';
  idsInOrderUrlParam: string = 'idsInOrder';
  cardIndexUrlParam: string = 'cardIndex';

  constructor(
      private location: Location
  ) {}

  ngOnInit(): void {
    getFlashCards().then((response) => {
      this.data = response;

      const queryParams = new URLSearchParams(window.location.search);
      const categoryParam = queryParams.get(this.categoryUrlParam);
      const subCategoryParam = queryParams.get(this.subCategoryUrlParam);

      if (categoryParam) {
        this.selectedCategory = this.data.categories.find(x => x.name === categoryParam);

        if (subCategoryParam) {
          this.selectedSubCategory = this.selectedCategory!.subCategories.find(x => x.name === subCategoryParam)

          const showQuestionParam = queryParams.get(this.showQuestionUrlParam) === 'true';
          const isIndexOrderParam = queryParams.get(this.isIndexOrderUrlParam) === 'true';
          const showExampleParam = queryParams.get(this.showExampleUrlParam) === 'true';

          const idsInOrderParam = (queryParams.get(this.idsInOrderUrlParam) ?? '').split('-');

          const index = +queryParams.get(this.cardIndexUrlParam);
          this.cardIndex = index;

          const newSettings = {
            isIndexOrder: showQuestionParam,
            showQuestionFirst: showQuestionParam,
            showExampleAutomatically: showExampleParam,
          };

          this.startFlashCardsFromUrlParams(newSettings, idsInOrderParam);
        }
      }
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

    this.location.replaceState(this.buildUrl(this.selectedCategory?.name));
  }

  subCategoryClick(subCategory: SubCategory) {
    this.selectedSubCategory = subCategory;
    this.startPopup.openPopup(subCategory);
  }

  homeClick(): void {
    this.flashCardReady = false;
    this.selectedCategory = undefined;
    this.selectedSubCategory = undefined;

    this.location.replaceState(this.buildUrl());
  }

  startFlashCards(settings: StartSettings) {
    this.settings = settings;
    if (settings.isIndexOrder) {
      this.flashCards = this.selectedSubCategory!.flashCards;
    } else {
      this.flashCards = this.shuffleArray(this.selectedSubCategory!.flashCards);
    }
    const ids = this.flashCards.map(x => x.id);

    this.flashCardReady = true;

    this.location.replaceState(this.buildUrl(this.selectedCategory!.name, this.selectedSubCategory!.name, ids));
  }

  startFlashCardsFromUrlParams(settings: StartSettings, ids: string[]) {
    this.settings = settings;
    this.flashCards = this.selectedSubCategory!.flashCards.sort((a, b) => {
      return ids.indexOf(a.id) - ids.indexOf(b.id);
    });

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
    return this.selectedSubCategory ? this.selectedSubCategory.flashCards.filter(x => x.example && x.example.trim().length > 0).length > 0 : false;
  }

  private buildUrl(category: string | null | undefined = '', subCategory: string | null | undefined = '', cardIdsOrdered: string[] = []): string {
    const queryParams = new URLSearchParams();

    if (category !== null && category !== undefined && category !== '') {
      queryParams.set(this.categoryUrlParam, category);
    }

    if (subCategory !== null && subCategory !== undefined && subCategory !== '') {
      queryParams.set(this.subCategoryUrlParam, subCategory);

      queryParams.set(this.showQuestionUrlParam, this.settings.showQuestionFirst ? 'true' : 'false');
      queryParams.set(this.isIndexOrderUrlParam, this.settings.isIndexOrder ? 'true' : 'false');
      queryParams.set(this.showExampleUrlParam, this.settings.showExampleAutomatically ? 'true' : 'false');
      queryParams.set(this.idsInOrderUrlParam, cardIdsOrdered.join('-'));

    }

    const end = queryParams.toString();
    if (end !== '') {
      return `${location.pathname}?${queryParams.toString()}`;
    } else {
      return location.pathname;
    }
  }
}
