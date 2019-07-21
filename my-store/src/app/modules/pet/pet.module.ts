import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/modules/_core/core.module';
import { OverviewComponent } from './pages/overview/overview.component';
import { DetailComponent } from './pages/detail/detail.component';
import { PetRoutingModule } from 'src/app/modules/pet/pet-routing.module';
import { SharedModule } from 'src/app/modules/_shared/shared.module';
import { EditComponent } from './pages/edit/edit.component';
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [OverviewComponent, DetailComponent, EditComponent, OverviewTableComponent, EditFormComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    SharedModule
  ]
})
export class PetModule { }
