import { Component, OnInit } from '@angular/core';
import { ListeVoyagesService } from './liste-voyages.service';
import { VoyageResponse } from 'src/app/models/voyage-reponse';

@Component({
  selector: 'app-liste-voyages',
  templateUrl: './liste-voyages.page.html',
  styleUrls: ['./liste-voyages.page.scss'],
})
export class ListeVoyagesPage implements OnInit {
  listeVoyages: VoyageResponse[];

  constructor(private listeVoyagesService: ListeVoyagesService) {}

  ngOnInit() {
    this.listeVoyagesService.getVoyages().subscribe(
      (voyages) =>
        (this.listeVoyages = [
          {
            createdAt: new Date('2018-12-09T11:58:18.265Z'),
            description: 'It was awesome!',
            href: '/api/trips/7f063c6e-7717-401a-aa47-34a52f6a45cf',
            id: '7f063c6e-7717-401a-aa47-34a52f6a45cf',
            placesCount: 6,
            title: 'My Bad Trip',
            updatedAt: new Date('2018-12-09T11:58:18.265Z'),
            userHref: '/api/users/d68cf4e9-1349-4d45-b356-c1294e49ef23',
            userId: 'd68cf4e9-1349-4d45-b356-c1294e49ef23',
          },
        ])
    );
  }
}
