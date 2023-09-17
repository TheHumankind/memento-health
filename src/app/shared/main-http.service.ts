import { Drug } from './../models/drug';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { take } from 'rxjs';
import { setBody, setDeseases, setDrugs } from './app.actions';
import { Desease } from '../models/desease';
import { BodySegment } from '../models/body-segment';

@Injectable({
  providedIn: 'root'
})
export class MainHttpService {

  constructor(private http: HttpClient, private store: Store) { }

  public getDrugs(): void {
    this.http.get<Drug[]>('../../assets/drugs.json')
    .pipe(take(1))
    .subscribe((drugs: Drug[]) => {
      console.log(drugs);
      this.store.dispatch(new setDrugs(drugs));
    })
  }

  public getDeseases(): void {
    this.http.get<Desease[]>('../../assets/deseases.json')
    .pipe(take(1))
    .subscribe((deseases: Desease[]) => {
      this.store.dispatch(new setDeseases(deseases))
    })
  }

  public getBody(): void {
    this.http.get<BodySegment[]>('../../assets/body.json')
    .pipe(take(1))
    .subscribe((body: BodySegment[]) => {
      this.store.dispatch(new setBody(body));
    })
  }
}
