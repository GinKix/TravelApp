import { Component, OnInit } from '@angular/core';
import { ListeVoyagesService } from './liste-voyages.service';
import { VoyageResponse } from 'src/app/models/voyage-reponse';

// Importation des clients HTTP d'Angular
import { HttpClient } from '@angular/common/http';
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.page.html',
  styleUrls: ['./liste-voyages.page.scss'],
})
export class ListeVoyagesPage implements ViewDidEnter {
  listeVoyages: VoyageResponse[];

  constructor(private listeVoyagesService: ListeVoyagesService) {}

  ionViewDidEnter(): void {
    this.listeVoyagesService
      .getVoyages()
      .subscribe((voyages) => (this.listeVoyages = voyages));
  }

  aVenir() {
    this.listeVoyages.filter;
  }
}
