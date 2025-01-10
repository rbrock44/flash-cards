import { TestBed } from '@angular/core/testing';
import { FlashCardsComponent } from './flash-cards.component';

describe('FlashCardsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashCardsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FlashCardsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
