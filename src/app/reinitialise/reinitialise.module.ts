import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialisePageRoutingModule } from './reinitialise-routing.module';

import { ReinitialisePage } from './reinitialise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialisePageRoutingModule
  ],
  declarations: [ReinitialisePage]
})
export class ReinitialisePageModule {}
