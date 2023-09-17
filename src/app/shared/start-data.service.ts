import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppHealthState } from './app.main-state';
import { Select } from '@ngxs/store';
import { setMode } from './app.actions';

@Injectable({
  providedIn: 'root'
})
export class StartDataService {

  @Select(AppHealthState.getMode)
  picked$: Observable<string>;

  constructor(private store: Store) { }

  switchTo(pick: string): void {
    this.store.dispatch(new setMode(pick));
  }
}
