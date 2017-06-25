import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { DiaryEntry } from '../models/diary-entry';

import * as fromRoot from '../reducers';
import * as diaryActions from '../actions/diary-entries';

@Component({
  selector: 'diary-entry-create',
  template: `
    <diary-entry-detail
      [entry]="entryToCreate"
      [options]="entryDetailComponentOptions"
      (submit)="onCreate()"
    ></diary-entry-detail>
  `
})
export class EntryCreateContainerComponent {
  entryToCreate: DiaryEntry;
  entryDetailComponentOptions: object;

  constructor(private store: Store<fromRoot.State>) {
    this.entryDetailComponentOptions = {
      buttonLabel: 'Create'
    };
    this.entryToCreate = {
      date: new Date(),
      message: ''
    };
  }

  onCreate() {
    this.store.dispatch(new diaryActions.CreateEntryAction(this.entryToCreate));
  }
}
