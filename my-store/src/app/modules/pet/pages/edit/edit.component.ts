import { Component, OnInit } from '@angular/core';
import { EditFormService } from 'src/app/modules/pet/services/edit-form.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [EditFormService]
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
