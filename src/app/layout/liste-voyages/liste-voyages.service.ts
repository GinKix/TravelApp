import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Voyages } from 'src/app/models/voyage-request';
import {
  rawVoyageResponse,
  VoyageResponse,
} from 'src/app/models/voyage-reponse';
import { map } from 'rxjs/operators';
import { rawTripToTrip, tripToRawTrip } from 'api/trip-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListeVoyagesService {
  constructor(private http: HttpClient) {}

  getVoyages(): Observable<VoyageResponse[]> {
    return this.http
      .get<rawVoyageResponse[]>(
        'https://devmobil-near-bar.herokuapp.com/api/trips'
      )
      .pipe(map((rawVoyage) => rawVoyage.map(rawTripToTrip)));
  }

  createTrip$(trip: Voyages): Observable<VoyageResponse> {
    // Converts trip to create to an API compatible model
    const body = tripToRawTrip(trip);
    return (
      this.http
        .post<rawVoyageResponse>(`${environment.apiUrl}/trips`, body)
        // Converts the trip returned from the API to a model compatible with our application.
        .pipe(map(rawTripToTrip))
    );
  }
  //crer methode pour recup 1 voyage. Elle aura un id,
}
