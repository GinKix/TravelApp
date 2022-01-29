import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ListeVoyagesService } from '../liste-voyages/liste-voyages.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage {
  createTripForm: FormGroup;
  constructor(
    // Inject the authentication provider.
    private auth: AuthService,
    // Inject the router
    private router: Router,
    private formBuilder: FormBuilder,
    private listeVoyagesService: ListeVoyagesService
  ) {
    this.createTripForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
  }

  onCreateTrip() {
    this.listeVoyagesService
      .createTrip$({
        description: this.createTripForm.get('description').value,
        endDate: this.createTripForm.get('endDate').value,
        startDate: this.createTripForm.get('startDate').value,
        title: this.createTripForm.get('title').value,
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
