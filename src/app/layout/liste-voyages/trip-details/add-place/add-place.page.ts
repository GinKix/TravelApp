import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaceService } from '../place.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.page.html',
  styleUrls: ['./add-place.page.scss'],
})
export class AddPlacePage implements OnInit {
  createPlaceForm: FormGroup;
  tripID: string;
  tripHref: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private placeService: PlaceService
  ) {
    this.createPlaceForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
      pictureUrl: [null, null],
    });

    this.tripID = this.activatedRoute.snapshot.params.tripID;
    this.tripHref = this.activatedRoute.snapshot.params.tripHref;
  }

  ngOnInit(): void {}

  onCreatePlace() {
    this.placeService
      .createPlace({
        description: this.createPlaceForm.controls.description.value,
        name: this.createPlaceForm.controls.title.value,
        tripHref: this.tripHref,
        location: {
          type: 'Point',
          coordinates: [
            this.createPlaceForm.controls.latitude.value,
            this.createPlaceForm.controls.longitude.value,
          ],
        },
        tripID: this.tripID,
      })
      .subscribe(() => {
        this.router.navigate([
          '/liste-voyages/trip-details/',
          this.tripID,
          this.tripHref,
        ]);
      });
  }
}
