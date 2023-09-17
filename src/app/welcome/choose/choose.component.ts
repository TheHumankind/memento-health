import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { setTag } from 'src/app/shared/app.actions';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  constructor(private router: Router, private store: Store) {

  }

  public toDeseases(): void {
    this.store.dispatch(new setTag('deseases'));
    this.router.navigate(['human']);
  }

  public toDrugs(): void {
    this.store.dispatch(new setTag('drugs'));
    this.router.navigate(['main-page']);
  }

}
