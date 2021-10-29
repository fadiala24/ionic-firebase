import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialiserPage } from './reinitialiser.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialiserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialiserPageRoutingModule {}
