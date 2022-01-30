# TravelApp

## Contexte
Projet du cours *DevMobile*
Le rendu de ce projet est une webapp mobile permettant de se gérer une liste de voyage. Nous l'avons appelé TravelApp. Il est possible de se créer un compte ou de se connecter avec un utilisateur existant. On a accès à une liste de voyage créée au préalable. Sinon une liste de destinations sera affichée. Plusieurs listes peuvent être créées ou plusieurs destinations peuvent être ajoutées à une liste. 

## Fonctionnement
Pour commencer, il faut cloner le projet sur VisualStudioCode (ou autre éditeur de texte/code utilisé). Les méthodes proposées par Git sont à l'aide de la ligne de commande **git clone** suivi de l'adresse HTTPS, SSH ou directement avec le GitHub CLI. Il est aussi possible de télécharger ce projet directement sous forme de ZIP et il suffira juste de l'extraire ou encore d'utiliser le GitHub Desktop. Quand le dossier complet est ajouté à votre éditeur de code, il faut ouvrir un terminal et se déplacer à la racine du dossier. Ensuite il est nécessaire de faire un **npm install** pour avoir toutes les extensions nécessaires au fonctionnement du projet. Quand l'installation est effectuée, il faut créer le fichier environment.ts en se basant sur le contenu du environment.sample.ts et adapter les champs indiqués. Pour finir, la commande **ionic serve** permet d'accéder à l'application

## Utilisation
Pour commencer, une connexion est nécessaire, si vous disposez déjà d'un compte, il suffit de vous connecter sinon il faudra s'enregistrer. L'enregistrement nécessite simplement un nom d'utilisateur et un mot de passe.
Une fois connecté, la page listant tous les voyages créés s'affichent. En cliquant sur l'image, les détails du voyage apparaissent, en montrant cette dite-image, la date de départ et la liste des places à visiter. Il est possible de modifier ces données: En cliquant sur le bouton **Modifier**, vous pouvez changer le nom du voyage, la description, l'image ainsi que la date de départ et d'arrivée. La liste des places peut être aussi changée, en supprimant une place (bouton **Supprimer**) ou en ajoutant une (bouton **Ajouter une place**). Ces 2 interactions sont effectuées à l'aide des 2 boutons indiqués. L'ajout de place nécessite un nom, une description, la latitude et la longitude. Optionnellement vous pouvez ajouter une photo directement depuis votre appareil ou votre galerie.


## Remarques
Les images ne sont pas liées aux voyages et est encore à implémenter/corriger.
Les places ne sont pas filtrées par voyage concerné et s'affichent toutes et partout. Une tentative est disponible en commentaire dans les fichiers concernés. 
L'enregistrement de l'utilisateur fonctionne mais on ne reçoit pas de réponse, même en cas de succès. 
Pour accéder aux détails d'un voyage, il suffit de cliquer sur l'image. En raison du bouton "supprimer" nous n'avons pas pu rendre toute la card clicable. Nous n'arrivons plus à ajouter des places, cela fonctionnait bien au début, il nous semble qu'il s'agit d'une limitation de nombre venant de l'API.
