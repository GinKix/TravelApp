import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVoyagesPageRoutingModule } from './liste-voyages-routing.module';

import { ListeVoyagesPage } from './liste-voyages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVoyagesPageRoutingModule
  ],
  declarations: [ListeVoyagesPage]
})
export class ListeVoyagesPageModule {}
