import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlace, PlaceResponse } from 'src/app/models/place-response';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  constructor(private httpClient: HttpClient) {}

  createPlace(placePayload: IPlace): Observable<PlaceResponse> {
    return this.httpClient.post<PlaceResponse>(
      'https://devmobil-near-bar.herokuapp.com/api/places',
      placePayload
    );
  }

  getPlaces(): Observable<PlaceResponse[]> {
    return this.httpClient.get<PlaceResponse[]>(
      'https://devmobil-near-bar.herokuapp.com/api/places'
    );
  }
}
