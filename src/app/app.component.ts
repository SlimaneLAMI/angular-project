import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-project';

  // Injection de la dependance router pour la navigation entre composants
  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  // Declaration d'un tableau de routes utilisées dans le html
  tabs: any[] = [
    {
      title: 'Home',
      path: 'home',
    },
    {
      title: 'Stagiaire',
      path: 'stagiaire',
    },
    {
      title: 'Adresse',
      path: 'adresse',
    },
    {
      title: 'Template form',
      path: 'template-form',
    },
    {
      title: 'Reactive form',
      path: 'reactive-form',
    },
    {
      title: 'Calculette',
      path: 'calculette',
    },
    {
      title: 'Commentaire',
      path: 'commentaire',
    },
    {
      title: 'Personne',
      path: 'personne',
    },
    {
      title: 'Rocket',
      path: 'rocket',
    },
    {
      title: 'Table',
      path: 'table',
    },
    {
      title: 'Tree',
      path: 'tree',
    },
    {
      title: 'Address form',
      path: 'address-form',
    },
    {
      title: 'Register',
      path: 'register',
    },
    {
      title: 'Profile',
      path: 'profile',
    },
    {
      title: 'Camion',
      path: 'vehicule/camion',
    },
    {
      title: 'Voiture',
      path: 'vehicule/voiture',
    },
    {
      title: 'Features',
      path: 'features',
    },
    {
      title: 'Developer',
      path: 'developer',
    }

  ];
  
// Se deconnecte en supprimant la propriete isConnected du localStorage
logOut(){
  // Pour supprimer une variable de localStorage
  // localStorage.removeItem('isConnected');
  // this.router.navigateByUrl('/home');
  this.tokenStorageService.signOut();
  window.location.reload();
}

// Methode retournant true/false si un utilisateur est connecte
isConnected(){
  if (Boolean(this.tokenStorageService.getToken()))
    return true;
  return false;
}
}