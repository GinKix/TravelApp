import { Component } from '@angular/core';

// Type custom représentant les données d'une page
declare type PageTab = {
  title: string; // Le titre de la page dans la barre de navigation
  icon: string; // L'icône de la page dans la barre de navigation
  path: string; // Le chemin de la page à afficher
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {
  tabs: PageTab[];

  constructor() { 
    this.tabs = [
      {title: "Mon Compte", icon: "person-circle-outline", path:"profil-user"},
      {title: "Liste des Voyages", icon: "list", path:"liste-voyages"},
    ]
  }
}
