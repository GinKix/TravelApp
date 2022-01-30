import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  IPlace,
  PlaceResponse,
  PlaceVoyage,
} from 'src/app/models/place-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  updateCreatePlaceState$ = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  createPlace(placePayload: IPlace): Observable<PlaceResponse> {
    return this.httpClient.post<PlaceResponse>(
      'https://devmobil-near-bar.herokuapp.com/api/places',
      /* {
        $API_URL;
      }*/
      placePayload
    );
  }

  getPlaces(): Observable<PlaceResponse[]> {
    return this.httpClient.get<PlaceResponse[]>(
      'https://devmobil-near-bar.herokuapp.com/api/places'
    );
  }

  /*************   Tentative pour récupérer les places spécifiques d'un voyage.   ************* */
  // getPlaces(id: string): Observable<PlaceResponse> {
  //   const url = `{'https://'devmobil-near-bar.herokuapp.com/api}/places?id=${id}`;

  // return this.httpClient.get<PlaceVoyage[]>(
  //   'https://devmobil-near-bar.herokuapp.com/api/places'
  // ); /*${id}*/

  // return this.httpClient.get<PlaceResponse>(url).pipe(
  //   map((place) => {
  //     let placeToReturn: PlaceVoyage = {
  //       id: place[0].id,
  //       name: place[0].name,
  //       description: place[0].description,
  //       location: place[0].location,
  //       pictureUrl: place[0].pictureUrl,
  //       tripId: place[0].tripId,
  //       tripHref: place[0].tripHref,
  //       updatedAt: place[0].updatedAt,
  //       href: place[0].href,
  //       createdAt: place[0].createdAt,
  //     };
  //     return placeToReturn;
  //   })
  // );
  // }

  deletePlace(placeID: string): Observable<any> {
    return this.httpClient.delete<any>(
      `https://devmobil-near-bar.herokuapp.com/api/places/${placeID}`
    );
  }

  getUpdateCreatePlaceState(): BehaviorSubject<boolean> {
    return this.updateCreatePlaceState$;
  }
}
