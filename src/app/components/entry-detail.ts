import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'diary-entry-detail',
  template: `
    <div class="example-form">
      <p>
        <md-input-container class="example-full-width">
          <textarea mdInput [(ngModel)]="entry.message" placeholder="Введите запись">1600 Amphitheatre Pkwy</textarea>
        </md-input-container>
      </p>
      <p>
        <common-date-picker [(date)]="entry.date"></common-date-picker>
      </p>
      <button md-raised-button (click)="submit.emit(entry)">{{options.buttonLabel}}</button>
    </div>
  `,
  styles: [
    `.example-form {
      width: 500px;
    }`,
    `.example-full-width {
      width: 100%;
    }`
  ]
})
export class EntryDetailComponent {
  @Input() entry: any;
  @Input() options: any;
  @Output() submit = new EventEmitter<string>();
}
