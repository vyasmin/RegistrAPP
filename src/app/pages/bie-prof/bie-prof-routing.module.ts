import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BieProfPage } from './bie-prof.page';

const routes: Routes = [
  {
    path: '',
    component: BieProfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BieProfPageRoutingModule {}
