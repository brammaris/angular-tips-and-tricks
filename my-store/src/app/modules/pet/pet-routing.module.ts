import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from 'src/app/modules/pet/pages/overview/overview.component';
import { DetailComponent } from 'src/app/modules/pet/pages/detail/detail.component';
import { ROUTE } from 'src/app/modules/_core/services/route.service';
import { EditComponent } from 'src/app/modules/pet/pages/edit/edit.component';

const routes: Routes = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: ROUTE.getPetChildRoute(ROUTE.PET_DETAIL).valueOf(),
        component: DetailComponent
    },
    {
        path: ROUTE.getPetChildRoute(ROUTE.PET_EDIT).valueOf(),
        component: EditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PetRoutingModule {

}
