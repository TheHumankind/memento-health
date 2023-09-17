import { Router } from '@angular/router';
import { selectDrug, sortByKey } from './../../shared/app.actions';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Drug } from 'src/app/models/drug';
import { AppHealthState } from 'src/app/shared/app.main-state';

@Component({
  selector: 'app-drug',
  templateUrl: './drug.component.html',
  styleUrls: ['./drug.component.scss']
})
export class DrugComponent {

  @Select(AppHealthState.getDrug)
  drug$: Observable<Drug | undefined>;

  constructor(private router: Router, private store: Store) {
  }

  public toWelcome(): void {
    this.store.dispatch(new sortByKey(''));
    this.router.navigate(['welcome']);
  }
}
