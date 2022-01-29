import { Component, OnInit } from '@angular/core';
import { VoyageResponse } from 'src/app/models/voyage-reponse';
import { PlaceResponse } from 'src/app/models/place-response';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeVoyagesService } from '../liste-voyages.service';
import { PlaceService } from './place.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  //voyage: VoyageResponse;
  listePlaces: PlaceResponse[];
  tripID: string;
  tripHref: string;
  startDate: string;
  trip: VoyageResponse;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listeVoyagesService: ListeVoyagesService,
    private placeService: PlaceService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.tripID = this.activatedRoute.snapshot.params.tripID;
    this.tripHref = this.activatedRoute.snapshot.params.tripHref;

    this.listeVoyagesService
      .getOneVoyage(this.tripID)
      .subscribe((tripResponse: VoyageResponse) => {
        this.trip = tripResponse;
        this.startDate = JSON.parse(this.trip.description).startDate;
      });

    this.placeService
      .getPlaces()
      .subscribe((placesResponse: PlaceResponse[]) => {
        this.listePlaces = placesResponse;
      });

    this.placeService
      .getUpdateCreatePlaceState()
      .subscribe((placeState: boolean) => {
        if (placeState) {
          this.placeService
            .getPlaces()
            .subscribe((placesResponse: PlaceResponse[]) => {
              this.listePlaces = placesResponse;
            });

          this.placeService.getUpdateCreatePlaceState().next(false);
        }
      });
  }

  onUpdateTrip(trip: VoyageResponse) {
    this.router.navigate(['update-trip'], {
      queryParams: { trip: JSON.stringify(trip) },
    });
  }

  onShowPlace(place: PlaceResponse) {
    this.router.navigate(['/liste-voyages/trip-details/show-place'], {
      /*Hello, je pense que c'est cet url qu'il faudra rendre dynamique pour afficher autre chose que l'ibis ^^ -J */
      queryParams: { place: JSON.stringify(place) },
    });
  }

  async onDeletePlace(place: PlaceResponse) {
    const alert = await this.alertController.create({
      header: 'Attention !',
      message: 'Voulez-vous supprimer' + place.name + ' ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Confirmer',
          handler: () => {
            this.placeService.deletePlace(place.id).subscribe(() => {
              this.placeService.getUpdateCreatePlaceState().next(true);
            });
          },
        },
      ],
    });
    await alert.present();
  }
}
