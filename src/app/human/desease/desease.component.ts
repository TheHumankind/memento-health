import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { filterSegments, selectDesease, setRequest, setTag, sortByKey } from 'src/app/shared/app.actions';

@Component({
  selector: 'app-desease',
  templateUrl: './desease.component.html',
  styleUrls: ['./desease.component.scss']
})
export class DeseaseComponent {

  private searchQ: string = '';

  constructor(private store: Store, private router: Router) {}

  public inputEmitter(searchValue: string) {
    this.store.dispatch(new selectDesease(searchValue));
  }

  public toHeadProblems(): void {
    this.store.dispatch(new setTag('body-problems'))
    this.store.dispatch(new filterSegments('Голова'))
    this.router.navigate(['main-page'])
  }

  public toProblems(): void {
    this.store.dispatch(new setTag('deseases'));
    this.router.navigate(['main-page'])
  }
}
