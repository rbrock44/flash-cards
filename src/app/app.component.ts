import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {getFlashCards} from "./services/flash-card.service";
import {FlashcardsData, SubCategory} from "./type/flash-card.type";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'flash-cards';
  selectedCategory = undefined;
  data: FlashcardsData = { categories: [] };

  ngOnInit(): void {
    getFlashCards().then((response) => {
      this.data = response;
    });
  }

  toggleCategory(category: any, event: Event) {
    const target = event.target as HTMLElement;

    if (target.tagName === 'P' && target.className.includes('sub-categories')) {
      return;
    }

    if (this.selectedCategory === category) {
      this.selectedCategory = undefined;
    } else {
      this.selectedCategory = category;
    }
  }

  subCategoryClick(subCategory: SubCategory) {

  }
}
