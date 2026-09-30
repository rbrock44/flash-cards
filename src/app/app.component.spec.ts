import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Location } from '@angular/common';
import { provideLocationMocks } from '@angular/common/testing';
import { FlashcardsData } from './type/flash-card.type';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideLocationMocks()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'flash-cards' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('flash-cards');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Flash Cards');
  });

  it('should return to the deck, then home, as the browser goes back', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const location = TestBed.inject(Location);
    fixture.detectChanges();

    app.data = {
      categories: [{
        name: 'Spanish',
        subCategories: [{
          name: 'Verbs',
          flashCards: [
            { id: 'a', question: 'q1', answer: 'a1' },
            { id: 'b', question: 'q2', answer: 'a2' },
          ],
        }],
      }],
    } as unknown as FlashcardsData;
    app.selectedCategory = app.data.categories[0];
    app.selectedSubCategory = app.selectedCategory.subCategories[0];
    app.startFlashCards({ showQuestionFirst: true, isIndexOrder: true, showExampleAutomatically: true });
    expect(location.path()).toContain('subCategory=Verbs');

    app.homeClick();
    expect(app.flashCardReady).toBe(false);

    location.back();
    expect(app.flashCardReady).toBe(true);
    expect(app.selectedSubCategory?.name).toBe('Verbs');

    location.back();
    expect(app.flashCardReady).toBe(false);
  });

  it('should restore the card order setting separately from the question setting', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const location = TestBed.inject(Location);
    fixture.detectChanges();

    app.data = {
      categories: [{
        name: 'Spanish',
        subCategories: [{ name: 'Verbs', flashCards: [{ id: 'a', question: 'q1', answer: 'a1' }] }],
      }],
    } as unknown as FlashcardsData;

    location.go('/?category=Spanish&subCategory=Verbs&showQuestionFirst=true&isIndexOrder=false&showExampleAutomatically=true&idsInOrder=a');
    location.go('/');
    location.back();

    expect(app.settings.showQuestionFirst).toBe(true);
    expect(app.settings.isIndexOrder).toBe(false);
  });
});
