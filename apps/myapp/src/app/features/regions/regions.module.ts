import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UiModule } from '@a-boss/ui';
import { RegionCountriesResolver } from '../../core/resolvers/region-countries.resolver';
import { RegionsRoutingModule } from './regions-routing.module';
import { CountriesComponent } from './countries/countries.component';
import { RegionsComponent } from './regions/regions.component';

const routes: Routes = [
  {
    path: '',
    component: RegionsComponent,
    children: [
      {
        path: ':code',
        component: CountriesComponent,
        resolve: {
          countries: RegionCountriesResolver
        },
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RegionsRoutingModule,
    RouterModule.forChild(routes),
    UiModule,
  ],
  declarations: [RegionsComponent, CountriesComponent],
})
export class RegionsModule { }
