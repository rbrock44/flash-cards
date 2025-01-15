import {CommonModule} from '@angular/common';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {StartSettings, SubCategory} from "../../type/flash-card.type";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-start-popup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './start-popup.component.html',
  styleUrl: './start-popup.component.scss'
})
export class StartPopupComponent {
  subCategory: SubCategory = {
    id: '',
    name: '',
    flashCards: []
  }
  @Output() startFlashCards = new EventEmitter<StartSettings>();
  @Input() showExampleOption = false;
  showPopup: boolean = false;

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      isRandomOrder: [false],
      showAnswerFirst: [false],
      showExampleManually: [false]
    });
  }

  openPopup(subCategory: SubCategory) {
    this.subCategory = subCategory;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  start() {
    this.emitSettings();
    this.showPopup = false;
  }

  private emitSettings() {
    const settings: StartSettings = {
      isIndexOrder: !this.settingsForm.get('isRandomOrder')?.value,
      showQuestionFirst: !this.settingsForm.get('showAnswerFirst')?.value,
      showExampleAutomatically: !this.settingsForm.get('showExampleManually')?.value,
    };
    this.startFlashCards.emit(settings);
  }
}
