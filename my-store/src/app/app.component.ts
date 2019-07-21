import { Component } from '@angular/core';
import { ROUTE } from 'src/app/modules/_core/services/route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ROUTE = ROUTE;
  title = 'my-store';
}
