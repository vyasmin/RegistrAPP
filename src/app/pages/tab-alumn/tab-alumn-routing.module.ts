import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAlumnPage } from './tab-alumn.page';

const routes: Routes = [
  {
    path: '',
    component: TabAlumnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAlumnPageRoutingModule {}
