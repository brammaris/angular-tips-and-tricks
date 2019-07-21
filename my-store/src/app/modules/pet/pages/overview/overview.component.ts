import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteService } from 'src/app/modules/_core';
import { OverviewTableService } from 'src/app/modules/pet/services/overview-table.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OverviewTableService]
})
export class OverviewComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
  }

}
