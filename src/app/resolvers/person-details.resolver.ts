import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Personne } from '../interfaces/personne';
import { PersonneService } from '../shared/personne.service';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsResolver implements Resolve<Personne> {
  constructor(private personneService: PersonneService, private route:Router) { }



  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Personne> {

        let id:any = route.paramMap.get('id');
        console.log("PersonDetailsResolver  called with "+ id);
        return this.personneService.getPerson(id)
        .pipe(map( data => {
            if (data[0]) {
                console.log(data[0]);
                return data[0];
            } else {
                console.log('redirecting');
                this.route.navigate(['error']);
                return null
            }
        }))
  }
}
