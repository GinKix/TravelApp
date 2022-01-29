import { Component } from '@angular/core';

//Import pour l'authentification et inclure le l ogout
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

// Type custom représentant les données d'une page
declare type PageTab = {
  title: string; // Le titre de la page dans la barre de navigation
  icon: string; // L'icône de la page dans la barre de navigation
  path: string; // Le chemin de la page à afficher
};

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {
  tabs: PageTab[];

  constructor(
    // Inject the authentication provider.
    private auth: AuthService,
    // Inject the router
    private router: Router
  ) {
    this.tabs = [
      {
        title: 'Mon Compte',
        icon: 'person-circle-outline',
        path: 'profil-user',
      },
      { title: 'Liste des Voyages', icon: 'list', path: 'liste-voyages' },
    ];
  }

  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
