import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Rocket } from '../interfaces/rocket';
import { RocketService } from '../shared/rocket.service';

@Injectable({
  providedIn: 'root'
})

export class RocketResolver implements Resolve<Rocket[]> {
  constructor(private rocketService: RocketService){ }
  resolve(): Observable<Rocket[]> {
    return this.rocketService.getAllRockets();
  }

}
