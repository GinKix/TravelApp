import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreationvoayagePageRoutingModule } from './creationvoayage-routing.module';

import { CreationvoayagePage } from './creationvoayage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreationvoayagePageRoutingModule
  ],
  declarations: [CreationvoayagePage]
})
export class CreationvoayagePageModule {}
