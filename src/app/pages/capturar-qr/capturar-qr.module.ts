import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CapturarQrPageRoutingModule } from './capturar-qr-routing.module';

import { CapturarQrPage } from './capturar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CapturarQrPageRoutingModule
  ],
  declarations: [CapturarQrPage]
})
export class CapturarQrPageModule {}
