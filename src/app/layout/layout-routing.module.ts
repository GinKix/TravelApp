import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LayoutPage } from "./layout.page";

const routes: Routes = [
  {
    path: "",
    component: LayoutPage,
    children: [
      // Route qui charge le module du profil utilisateur
      {
        path: "profil-user",
        loadChildren: () =>
          import("./profil-user/profil-user.module").then(
            (m) => m.ProfilUserPageModule
          ),
      },

      // Route qui charge le module de la liste des voyages
      {
        path: "liste-voyages",
        loadChildren: () =>
          import("./liste-voyages/liste-voyages.module").then(
            (m) => m.ListeVoyagesPageModule
          ),
      },
      {
        path: "create-trip",
        loadChildren: () =>
          import("./create-trip/create-trip.module").then(
            (m) => m.CreateTripPageModule
          ),
      },
      {
        path: "",
        pathMatch: "full",
        redirectTo: "liste-voyages",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
