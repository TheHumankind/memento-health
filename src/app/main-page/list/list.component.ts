import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, take } from 'rxjs';
import { BodySegment } from 'src/app/models/body-segment';
import { Desease } from 'src/app/models/desease';
import { Drug } from 'src/app/models/drug';
import { selectDesease, selectDrug, setTag, sortBody, sortByKey } from 'src/app/shared/app.actions';
import { AppHealthState } from 'src/app/shared/app.main-state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Select(AppHealthState.getPartIssues)
  bodySegment: Observable<BodySegment>;

  @Select(AppHealthState.getSortedInfo)
  sortedDrugs$: Observable<Drug[]>;

  @Select(AppHealthState.getSortedBody)
  sortedBodyIssues$: Observable<string[]>;

  @Select(AppHealthState.getSelectedDisease)
  selectedDesease$: Observable<Desease>;

  @Select(AppHealthState.getTag)
  tag$: Observable<string>;

  tag: string;

  constructor(private router: Router, private store: Store) {
    this.tag$.subscribe(tag => {
      this.tag = tag;
    })
  }

  public toDrug(drug: string):void {
    this.store.dispatch(new selectDrug(drug));
    this.router.navigate(['drug']);

  }

  public toDeseases(issue: string): void {
    this.store.dispatch(new selectDesease(issue));
    this.store.dispatch(new setTag('deseases'));
  }

  public inputEmitter(event$: string):void {
    if (this.tag === 'drugs') {
      this.store.dispatch(new sortByKey(event$));
    } else if (this.tag === 'body-problems') {
      this.store.dispatch(new sortBody(event$));
    } else if (this.tag === 'deseases') {

    }
  }
}
