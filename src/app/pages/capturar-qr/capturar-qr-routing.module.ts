import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturarQrPage } from './capturar-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CapturarQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapturarQrPageRoutingModule {}
