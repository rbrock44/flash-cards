import { TestBed } from '@angular/core/testing';
import { ScheduleComponent } from './schedule.component';

describe('ScheduleComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduleComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ScheduleComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
