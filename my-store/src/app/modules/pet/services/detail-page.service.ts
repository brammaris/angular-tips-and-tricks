import { Injectable } from '@angular/core';
import { PetService, Pet } from 'src/app/modules/_core/api';
import { Observable } from 'rxjs';

@Injectable()
export class DetailPageService {

  constructor(
    private _petService: PetService) { }

  getPet(id: number): Observable<Pet> {
    return this._petService.getPetById(id);
  }
}
