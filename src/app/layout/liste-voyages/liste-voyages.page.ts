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
  voyageFutur: VoyageResponse[];
  //ici la liste de liste

  constructor(private listeVoyagesService: ListeVoyagesService) {}

  ionViewDidEnter(): void {
    this.listeVoyagesService.getVoyages().subscribe((voyages) => {
      console.log(voyages);
      this.listeVoyages = voyages;

      this.voyageFutur = this.listeVoyages.filter((voyage) => {
        const voyageDate = new Date(voyage.startDate);
        const today = new Date();
        return voyageDate >= today;
      });
      console.log(this.voyageFutur);
    });
  }

  tous() {}
  aVenir() {
    console.log('Le bouton à venir fonctionne');

    /*JUSTE, MAIS FAUX
    this.listeVoyagesService
      .getVoyages()
      .subscribe((voyages) => (this.listeVoyages = voyages));

    let today = new Date().toISOString().slice(0, 10);
let maDate = voyage.startDate
    */
  }

  passe() {
    console.log('Le bouton passé fonctionne');
    /*JUSTE, MAIS FAUX
    this.listeVoyagesService
      .getVoyages()
      .subscribe((voyages) => (this.listeVoyages = voyages));

    let today = new Date().toISOString().slice(0, 10);

    this.listeVoyages.filter((voyage) => {
      if (voyage.startDate >= today) {
        return false;
      } else {
        return true;
      }
    });
    */
  }
}
