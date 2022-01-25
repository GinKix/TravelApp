import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Voyages } from './models/voyage-request';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
})
@Injectable({
  providedIn: 'root',
})
export class TripsService {
  constructor(private http: HttpClient) {}

  getTrips(): Observable<Voyages[]> {
    return of([]);
    /* return of([ 
      this.http.get('https://devmobil-near-bar.herokuapp.com/api/trips');  
      //  id: 'superId',
      //  title: 'fantasticTitle',
      //  description: 'niceDescription',
      // },   a l'air en trop mais ne résoud pas le soucis
    ]); */
  }
}

function convertTripsObjectToTripEntities(response: Voyages): Voyages[] {
  return [];
}
