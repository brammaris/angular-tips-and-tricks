import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from 'src/app/modules/_core/api';
import { OverviewTableService } from 'src/app/modules/pet/services/overview-table.service';

@Component({
  selector: 'app-overview-table',
  templateUrl: './overview-table.component.html',
  styleUrls: ['./overview-table.component.css']
})
export class OverviewTableComponent implements OnInit {

  public pets$: Observable<Pet[]>;
  displayedColumns: string[] = ['name', 'detail'];

  constructor(private _overviewTableService: OverviewTableService) { }

  ngOnInit() {
    this.pets$ = this._overviewTableService.getPets();
  }

  detailOnClick(id: number) {
    this._overviewTableService.goToDetail(id);
  }


}
