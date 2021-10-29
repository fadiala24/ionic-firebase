import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialisePage } from './reinitialise.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialisePageRoutingModule {}
