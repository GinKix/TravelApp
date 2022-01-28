import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TripDetailsPage } from './trip-details.page';
// verifier la route

const routes: Routes = [
  {
    path: '',
    component: TripDetailsPage,
  },
  {
    path: 'add-place',
    loadChildren: () =>
      import('./add-place/add-place.module').then((m) => m.AddPlacePageModule),
  },
  {
    path: 'show-place',
    loadChildren: () =>
      import('./show-place/show-place.module').then(
        (m) => m.ShowPlacePageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TripDetailsPageRoutingModule {}
