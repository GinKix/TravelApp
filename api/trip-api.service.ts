import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  rawVoyageResponse,
  VoyageResponse,
} from 'src/app/models/voyage-reponse';
import { Voyages } from 'src/app/models/voyage-request';
import { environment } from 'src/environments/environment.sample';
//import { environment } from 'src/environments/environment';
import { RawTrip, rawTripToTrip, Trip, tripToRawTrip } from './trip-model';

@Injectable({ providedIn: 'root' })
export class TripApi {
  constructor(private http: HttpClient) {}

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

  getTrip$(tripId: string): Observable<Trip> {
    return (
      this.http
        .get<RawTrip>(`${environment.apiUrl}/trips/${tripId}`)
        // Converts the trip returned from the API to a model compatible with our application.
        .pipe(map(rawTripToTrip))
    );
  }
}
