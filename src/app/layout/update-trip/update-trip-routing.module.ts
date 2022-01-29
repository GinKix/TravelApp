import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateTripPage } from './update-trip.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateTripPageRoutingModule {}
