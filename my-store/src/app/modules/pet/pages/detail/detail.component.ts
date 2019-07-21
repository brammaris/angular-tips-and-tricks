import { Component, OnInit } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/modules/_core';
import { DetailPageService } from 'src/app/modules/pet/services/detail-page.service';
import { Pet } from 'src/app/modules/_core/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [DetailPageService]
})
export class DetailComponent implements OnInit {

  public pet$: Observable<Pet>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _routeService: RouteService,
    private _detailPageService: DetailPageService) {

  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      const id = params['id'];
      this.pet$ = this._detailPageService.getPet(id);
    });
  }

  editOnClick(id: number) {
    this._router.navigate(this._routeService.getPetEditRoute(id));
  }
}
