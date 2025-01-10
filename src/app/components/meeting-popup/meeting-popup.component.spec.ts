import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingPopupComponent } from './meeting-popup.component';

describe('MeetingPopupComponent', () => {
  let component: MeetingPopupComponent;
  let fixture: ComponentFixture<MeetingPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
