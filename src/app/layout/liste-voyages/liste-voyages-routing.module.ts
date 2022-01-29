import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeVoyagesPage } from './liste-voyages.page';

const routes: Routes = [
  {
    path: '',
    component: ListeVoyagesPage,
  },
  {
    path: 'trip-details',
    loadChildren: () =>
      import('./trip-details/trip-details.module').then(
        (m) => m.TripDetailsPageModule
      ),
  },
  {
    path: 'trip-details/:tripID/:tripHref',
    loadChildren: () =>
      import('./trip-details/trip-details.module').then(
        (m) => m.TripDetailsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeVoyagesPageRoutingModule {}
