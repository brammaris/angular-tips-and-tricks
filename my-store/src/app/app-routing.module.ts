import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTE } from 'src/app/modules/_core/services/route.service';

const routes: Routes = [
  {
    path: ROUTE.PET.valueOf(),
    loadChildren: () => import('./modules/pet/pet.module').then(mod => mod.PetModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
