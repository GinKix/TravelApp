import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-show-place',
  templateUrl: './show-place.page.html',
  styleUrls: ['./show-place.page.scss'],
})
export class ShowPlacePage implements OnInit {
  location: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.location = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://maps.google.com/maps?q=' +
        'Rue du Maupas 20, 1004 Lausanne' +
        '&t=&z=13&ie=UTF8&iwloc=&output=embed'
    );
  }
}
