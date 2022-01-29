import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { VoyageResponse } from 'src/app/models/voyage-reponse';
import { ListeVoyagesService } from '../liste-voyages/liste-voyages.service';

@Component({
  selector: 'app-update-trip',
  templateUrl: './update-trip.page.html',
  styleUrls: ['./update-trip.page.scss'],
})
export class UpdateTripPage implements OnInit {
  createTripForm: FormGroup;
  trip: VoyageResponse;

  constructor(
    // Inject the authentication provider.
    private auth: AuthService,
    // Inject the router
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private listeVoyagesService: ListeVoyagesService
  ) {}

  ngOnInit(): void {
    this.trip = JSON.parse(
      this.activatedRoute.snapshot.queryParams.trip
    ) as VoyageResponse;
    this.createTripForm = this.formBuilder.group({
      title: [this.trip.title, [Validators.required]],
      description: [
        JSON.parse(this.trip.description).description,
        [Validators.required],
      ],
      startDate: [
        JSON.parse(this.trip.description).startDate,
        [Validators.required],
      ],
      endDate: [
        JSON.parse(this.trip.description).endDate,
        [Validators.required],
      ],
    });
  }

  onCreateTrip() {
    this.listeVoyagesService
      .updateTrip({
        description: this.createTripForm.get('description').value,
        endDate: this.createTripForm.get('endDate').value,
        startDate: this.createTripForm.get('startDate').value,
        title: this.createTripForm.get('title').value,
        id: this.trip.id,
      })
      .subscribe(() => {
        this.router.navigate(['liste-voyages']);
      });
  }

  loadImageFromDevice(event) {
    const preview = document.querySelector('img');
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onerror = (error) => {
      //handle errors
    };
  }

  // Add a method to log out.
  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
