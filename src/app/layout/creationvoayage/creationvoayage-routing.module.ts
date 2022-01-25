import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreationvoayagePage } from './creationvoayage.page';

const routes: Routes = [
  {
    path: '',
    component: CreationvoayagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreationvoayagePageRoutingModule {}
