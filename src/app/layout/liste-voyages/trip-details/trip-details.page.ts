import { Component, OnInit } from '@angular/core';
import { VoyageResponse } from 'src/app/models/voyage-reponse';
import { PlaceResponse } from 'src/app/models/place-response';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {
  //voyage: VoyageResponse;
  listePlaces: PlaceResponse[];

  constructor() {}

  ngOnInit() {}
}
