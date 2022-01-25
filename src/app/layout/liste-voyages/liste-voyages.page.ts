import { Component, OnInit } from '@angular/core';
import { ListeVoyagesService } from './liste-voyages.service';
import { VoyageResponse } from 'src/app/models/voyage-reponse';

// Importation des clients HTTP d'Angular
import { HttpClient } from '@angular/common/http';
import { ViewDidEnter } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.page.html',
  styleUrls: ['./liste-voyages.page.scss'],
})
export class ListeVoyagesPage implements ViewDidEnter {
  constructor(private auth: AuthService, public http: HttpClient) {}

  ionViewDidEnter(): void {
    const url = 'https://devmobil-near-bar.herokuapp.com/api/Trips';
    this.http.get(url).subscribe((trips) => {
      console.log(`Trips loaded`, trips);
    });
  }
}
