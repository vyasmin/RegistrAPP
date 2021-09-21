import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./pages/generar-qr/generar-qr.module').then( m => m.GenerarQRPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'animaciones',
    loadChildren: () => import('./pages/animaciones/animaciones.module').then( m => m.AnimacionesPageModule)
  },
  {
    path: 'cam-contras',
    loadChildren: () => import('./pages/cam-contras/cam-contras.module').then( m => m.CamContrasPageModule)
  },
  {
    path: 'bie-prof',
    loadChildren: () => import('./pages/bie-prof/bie-prof.module').then( m => m.BieProfPageModule)
  },
  {
    path: 'bie-alum',
    loadChildren: () => import('./pages/bie-alum/bie-alum.module').then( m => m.BieAlumPageModule)
  },
  {
    path: 'tab-alumn',
    loadChildren: () => import('./pages/tab-alumn/tab-alumn.module').then( m => m.TabAlumnPageModule)
  },
  {
    path: 'capturar-qr',
    loadChildren: () => import('./pages/capturar-qr/capturar-qr.module').then( m => m.CapturarQrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
