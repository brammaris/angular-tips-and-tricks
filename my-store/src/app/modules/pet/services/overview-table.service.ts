import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService, Pet } from 'src/app/modules/_core/api';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/modules/_core';

@Injectable()
export class OverviewTableService {

  constructor(
    private _router: Router,
    private _routeService: RouteService,
    private _petService: PetService) { }

  getPets(): Observable<Pet[]> {
    return this._petService.findPetsByStatus(['pending']);
  }

  goToDetail(id: number) {
    this._router.navigate(this._routeService.getPetDetailRoute(id));
  }
}
