import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PlaceResponse } from 'src/app/models/place-response';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.page.html',
  styleUrls: ['./show-place.page.scss'],
})
export class ShowPlacePage implements OnInit {
  location: SafeResourceUrl;
  place: PlaceResponse;

  constructor(
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.place = JSON.parse(
      this.activatedRoute.snapshot.queryParams.place
    ) as PlaceResponse;
    this.location = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=' +
        this.place.location.coordinates[0] +
        ',' +
        this.place.location.coordinates[1] +
        '&t=&z=13&ie=UTF8&iwloc=&output=embed'
    );
  }
}
