import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from '../auth.service';
import { AuthRequest } from 'src/app/models/auth-request';

@Component({
  //selector: 'app-login',
  templateUrl: './login.page.html',
  //styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  /**
   * This authentication request object will be updated when the user
   * edits the login form. It will then be sent to the API.
   */
  authRequest: AuthRequest;

  /**
   * If true, it means that the authentication API has return a failed response
   * (probably because the name or password is incorrect).
   */
  loginError: boolean;

  // Pour préparer les événements des 2 boutons de la page de login
  public buttonClickedConnect: boolean = false;
  public buttonClickedRegister: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.authRequest = {
      username: undefined,
      password: undefined,
    };
  }


  public hide: boolean = true;
  public onButtonClickConnect() {

      this.buttonClickedConnect = !this.buttonClickedConnect;
      this.hide = !this.hide;
  }

  public onButtonClickRegister() {

    this.buttonClickedRegister = !this.buttonClickedRegister;
}

  /**
   * Called when the login form is submitted.
   */
  onSubmit(form: NgForm) {
    // Do not do anything if the form is invalid.
    if (form.invalid) {
      return;
    }

    // Hide any previous login error.
    this.loginError = false;

    // Perform the authentication request to the API.
    this.auth.logIn$(this.authRequest).subscribe({
      next: () => this.router.navigateByUrl("/"),
      error: (err) => {
        this.loginError = true;
        console.warn(`Authentication failed: ${err.message}`);
      },
    });
  }
}
