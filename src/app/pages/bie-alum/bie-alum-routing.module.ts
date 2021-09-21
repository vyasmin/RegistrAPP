import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BieAlumPage } from './bie-alum.page';

const routes: Routes = [
  {
    path: '',
    component: BieAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BieAlumPageRoutingModule {}
