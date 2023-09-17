import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.scss']
})
export class UiSearchComponent {
  @Output() inputEmitter = new EventEmitter<string>();

  @Input() placeholder: string;

  inputValue: string;

  takeReq() {
    console.log(this.inputValue);
    this.inputEmitter.emit(this.inputValue);
  }
}
