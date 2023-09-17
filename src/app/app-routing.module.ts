import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseComponent } from './welcome/choose/choose.component';
import { DeseaseComponent } from './human/desease/desease.component';
import { ListComponent } from './main-page/list/list.component';
import { DrugComponent } from './final/drug/drug.component';

const routes: Routes = [
  {
    path: 'welcome', component: ChooseComponent,
  },
  {
    path: 'human', component: DeseaseComponent,
  },
  {
    path: 'main-page', component: ListComponent,
  },
  {
    path: 'drug', component: DrugComponent
  },
  {
    path: '**', component: ChooseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
