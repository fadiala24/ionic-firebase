import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialiserPageRoutingModule } from './reinitialiser-routing.module';

import { ReinitialiserPage } from './reinitialiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialiserPageRoutingModule
  ],
  declarations: [ReinitialiserPage]
})
export class ReinitialiserPageModule {}
