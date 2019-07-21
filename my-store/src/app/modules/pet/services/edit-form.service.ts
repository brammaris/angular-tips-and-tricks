import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { IPetFormData } from 'src/app/modules/pet/services/edit-form.interface';
import { PetService, Pet } from 'src/app/modules/_core/api';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/modules/_core';

export const FORM_PARAMS = {
  id: 'id',
  name: 'name'
};

@Injectable()
export class EditFormService {

  private _form: FormGroup;
  private _pet: Pet;

  get form(): FormGroup {
    if (!this._form) {
      this._form = this._fb.group({
        [FORM_PARAMS.id]: [null, Validators.required],
        [FORM_PARAMS.name]: [null, Validators.required]
      });
    }
    return this._form;
  }

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _routeService: RouteService,
    private _petService: PetService
  ) { }

  public loadDataForEdit(id: number) {
    this._petService.getPetById(id).subscribe(pet => {
      if (pet) {
        this._pet = pet;
        this.form.patchValue({
          [FORM_PARAMS.id]: pet.id,
          [FORM_PARAMS.name]: pet.name
        });
      }
    });
  }

  public submit() {
    const data: IPetFormData = this.form.value;
    this._petService.updatePet({
      id: data.id,
      name: data.name,
      photoUrls: this._pet.photoUrls,
      status: this._pet.status,
      category: this._pet.category,
      tags: this._pet.tags
    }).subscribe(result => {
      this._router.navigate(this._routeService.getPetDetailRoute(data.id));
    });
  }
}
