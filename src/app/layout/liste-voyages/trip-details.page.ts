import { Component, OnInit } from '@angular/core';
import { VoyageResponse } from 'src/app/models/voyage-reponse';
import { PlaceResponse } from 'src/app/models/place-response';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeVoyagesService } from '../liste-voyages.service';
import { PlaceService } from './place.service';

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
  trip: VoyageResponse;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private listeVoyagesService: ListeVoyagesService,
    private placeService: PlaceService
  ) {}

  ngOnInit() {
    this.tripID = this.activatedRoute.snapshot.params.tripID;
    this.tripHref = this.activatedRoute.snapshot.params.tripHref;

    this.listeVoyagesService
      .getOneVoyage(this.tripID)
      .subscribe((tripResponse: VoyageResponse) => {
        this.trip = tripResponse;
      });

    this.placeService
      .getPlaces()
      .subscribe((placesResponse: PlaceResponse[]) => {
        this.listePlaces = placesResponse;
      });
  }

  onShowPlace(place: PlaceResponse) {
    this.router.navigate(['/liste-voyages/trip-details/show-place'], {
      queryParams: { place: JSON.stringify(place) },
    });
  }
}
