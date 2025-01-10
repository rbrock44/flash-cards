import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPopupComponent } from './start-popup.component';

describe('MeetingPopupComponent', () => {
  let component: StartPopupComponent;
  let fixture: ComponentFixture<StartPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
