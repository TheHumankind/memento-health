import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppHealthState } from './shared/app.main-state';
import { Observable } from 'rxjs';
import { MainHttpService } from './shared/main-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Memento Health';

  constructor(private http: MainHttpService) {
    this.http.getDrugs();
    this.http.getBody();
    this.http.getDeseases();
  }
}
