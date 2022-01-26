import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { IRegister } from 'src/app/models/iregister';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerPayload: IRegister;
  registerError: boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.registerPayload = {
      name: undefined,
      password: undefined,
    };
  }

  ngOnInit(): void {}

  /**
   * Called when the login form is submitted.
   */
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      return;
    }

    // Hide any previous login error.
    this.registerError = false;

    // Perform the authentication request to the API.
    /*this.auth.register$(this.registerPayload).subscribe({
      next: () => this.router.navigateByUrl('/login'),
      error: (err) => {
        this.registerError = true;
        console.warn(`Registration failed: ${err.message}`);
      },
    });*/
  }
}
