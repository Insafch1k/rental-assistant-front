import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((p) => p.MainModule),
    pathMatch: 'full',
  },
  {
    path: 'profile/edit/:id',
    loadChildren: () =>
      import('./pages/edit/edit.module').then((p) => p.EditModule),
  },
  {
    path: 'profile/:id',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((p) => p.ProfileModule),
  },
  {
    path: 'properties',
    loadChildren: () =>
      import('./pages/properties/properties.module').then(
        (p) => p.PropertiesModule
      ),
  },
  {
    path: 'properties/:id',
    loadChildren: () =>
      import('./pages/property-detail/property-detail.module').then(
        (p) => p.PropertyDetailModule
      ),
  },
  {
    path: 'properties/edit/:id',
    loadChildren: () =>
      import('./pages/property-edit/property-edit.module').then(
        (p) => p.PropertyEditModule
      ),
  },
  {
    path: 'properties/add',
    loadChildren: () =>
      import('./pages/property-add/property-add.module').then(
        (p) => p.PropertyAddModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
