import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateTripPageRoutingModule } from './update-trip-routing.module';

import { UpdateTripPage } from './update-trip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateTripPageRoutingModule
  ],
  declarations: [UpdateTripPage]
})
export class UpdateTripPageModule {}
