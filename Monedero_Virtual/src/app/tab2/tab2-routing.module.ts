import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'solicitud-pago',
    loadChildren: () => import('./solicitud-pago/solicitud-pago.module').then( m => m.SolicitudPagoPageModule)
  },
  {
    path: 'pagos-sin-sol',
    loadChildren: () => import('./pagos-sin-sol/pagos-sin-sol.module').then( m => m.PagosSinSolPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
