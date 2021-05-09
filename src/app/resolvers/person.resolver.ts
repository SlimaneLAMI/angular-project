import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<Personne[]> {
  constructor(private personneService: PersonneService){ }

  // Les resolver d'Angular permettent d'attendre le
  // retour d'un observable avant d'initialiser / mettre à
  // jour un composant après une mise à jour de 

  // Le 

  resolve(): Observable<Personne[]> {
    return this.personneService.getAllPersons();
  }
}
