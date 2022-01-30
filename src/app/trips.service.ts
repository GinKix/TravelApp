import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Voyages } from './models/voyage-request';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
      this.http.get(`${environment.apiUrl}/trips`);  
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
