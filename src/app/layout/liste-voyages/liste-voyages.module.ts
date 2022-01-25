import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeVoyagesPageRoutingModule } from './liste-voyages-routing.module';

import { ListeVoyagesPage } from './liste-voyages.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeVoyagesPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [ListeVoyagesPage],
})
export class ListeVoyagesPageModule {}
