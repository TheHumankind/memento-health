import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeseaseComponent } from './desease/desease.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    DeseaseComponent
  ],
  imports: [
    CommonModule,
    UiModule,
  ]
})
export class HumanModule { }
