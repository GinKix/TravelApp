import { Component, OnInit } from '@angular/core';
import { ListeVoyagesService } from './liste-voyages.service';
import { VoyageResponse } from 'src/app/models/voyage-reponse';

// Importation des clients HTTP d'Angular
import { HttpClient } from '@angular/common/http';
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.page.html',
  styleUrls: ['./liste-voyages.page.scss'],
})
export class ListeVoyagesPage implements ViewDidEnter {
  listeVoyages: VoyageResponse[];
  voyageFutur: VoyageResponse[];
  voyagePasse: VoyageResponse[];
  voyageAffiche: VoyageResponse[];
  //ici la liste de liste

  constructor(
    private listeVoyagesService: ListeVoyagesService,
    private alertController: AlertController
  ) {}

  ionViewDidEnter(): void {
    this.listeVoyagesService.getVoyages().subscribe((voyages) => {
      //console.log(voyages);
      this.listeVoyages = voyages;

      this.voyageFutur = this.listeVoyages.filter((voyage) => {
        const voyageDate = new Date(voyage.startDate);
        const today = new Date();
        return voyageDate >= today;
      });
      //console.log(this.voyageFutur);

      this.voyagePasse = this.listeVoyages.filter((voyage) => {
        const voyageDate = new Date(voyage.startDate);
        const today = new Date();
        return voyageDate <= today;
      });
      console.log(this.voyagePasse);

      this.voyageAffiche = this.listeVoyages;
    });
  }

  tous() {
    console.log('Le bouton à venir fonctionne');
    this.voyageAffiche = this.listeVoyages;
  }
  aVenir() {
    console.log('Le bouton à venir fonctionne');
    this.voyageAffiche = this.voyageFutur;
  }

  passe() {
    console.log('Le bouton passé fonctionne');
    this.voyageAffiche = this.voyagePasse;
  }

  async supVoyage(trip: VoyageResponse) {
    //return console.log('hi');

    const alert = await this.alertController.create({
      header: 'Attention !',
      message: 'Voulez-vous supprimer le voyage ' + trip.title + ' ?',
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.listeVoyagesService.deleteTrip(trip.id).subscribe(() => {
              this.listeVoyagesService.updateCreateTripState$.next(true);
            });
          },
        },
      ],
    });
    await alert.present();
    return this.listeVoyages;
  }
}
