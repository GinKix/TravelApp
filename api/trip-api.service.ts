import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RawTrip, rawTripToTrip, Trip, tripToRawTrip } from './trip-model';

@Injectable({ providedIn: 'root' })
export class TripApi {
  constructor(private http: HttpClient) {}

  createTrip$(trip: Trip): Observable<Trip> {
    // Converts trip to create to an API compatible model
    const body = tripToRawTrip(trip);
    return (
      this.http
        .post<RawTrip>(`${environment.apiUrl}/trips`, body)
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
