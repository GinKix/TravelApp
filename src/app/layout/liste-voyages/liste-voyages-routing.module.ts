import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVoyagesPage } from './liste-voyages.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVoyagesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVoyagesPageRoutingModule {}
