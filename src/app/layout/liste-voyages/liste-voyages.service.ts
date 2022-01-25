import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Voyages } from 'src/app/models/voyage-request';
import { VoyageResponse } from 'src/app/models/voyage-reponse';

@Injectable({
  providedIn: 'root',
})
export class ListeVoyagesService {
  constructor(private http: HttpClient) {}

  getVoyages(): Observable<VoyageResponse[]> {
    return this.http.get<VoyageResponse[]>(
      'https://devmobil-near-bar.herokuapp.com/api/trips'
    );
  }
}
