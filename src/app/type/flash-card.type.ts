export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  example?: string | undefined;
  type?: string | undefined;
}

export interface SubCategory {
  id: string;
  name: string;
  flashCards: FlashCard[];
}

export interface MainCategory {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export interface FlashcardsData {
  categories: MainCategory[];
}

export interface StartSettings {
  showQuestionFirst: boolean;
  isIndexOrder: boolean;
  showExampleAutomatically: boolean;
}
