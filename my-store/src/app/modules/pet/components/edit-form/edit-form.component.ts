import { Component, OnInit } from '@angular/core';
import { EditFormService, FORM_PARAMS } from 'src/app/modules/pet/services/edit-form.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {

  FORM_PARAMS = FORM_PARAMS;

  get form(): FormGroup {
    return this._editFormService.form;
  }

  constructor(
    private _route: ActivatedRoute,
    private _editFormService: EditFormService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      const id = params['id'];
      this._editFormService.loadDataForEdit(id);
    });
  }

  submitOnClick() {
    this._editFormService.submit();
  }

}
