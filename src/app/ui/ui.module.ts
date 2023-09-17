import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSearchComponent } from './ui-search/ui-search.component';
import { ListItemComponent } from './list-item/list-item.component';


@NgModule({
  declarations: [
    UiSearchComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UiSearchComponent,
    ListItemComponent
  ]
})
export class UiModule { }
