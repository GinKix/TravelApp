import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/auth/auth.service";
import { AuthRequest } from "src/app/models/auth-request";
import { IRegister } from "src/app/models/iregister";
import { Update } from "src/app/models/update";

@Component({
  selector: "app-profil-user",
  templateUrl: "./profil-user.page.html",
  styleUrls: ["./profil-user.page.scss"],
})
export class ProfilUserPage implements OnInit {
  updateUserPayload: Update;
  updateUserError: boolean;

  constructor(private auth: AuthService, private router: Router) {
    this.updateUserPayload = {
      name: undefined,
      password: undefined,
      id: undefined,
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
    this.updateUserError = false;

    // Perform the authentication request to the API.
    this.auth.update(this.updateUserPayload).subscribe({
      next: () => this.router.navigateByUrl('/profil-user'),
      error: (err) => {
        this.updateUserError = true;
        console.warn(`Update failed: ${err.message}`);
      },
    });
  }

  // Add a method to log out.
  logOut() {
    console.log("logging out...");
    this.auth.logOut();
    this.router.navigateByUrl("/login");
  }
}
