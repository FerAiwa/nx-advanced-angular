import { createSelector } from '@ngrx/store';
import { RegionSelectors } from './region';
import { CountrySelectors } from './country';

export const getCountryExtended = createSelector(
  RegionSelectors.getRegions,
  CountrySelectors.getCountry,
  (regions, country, props) => {
    if (!country) return

    return {
      ...country,
      region: regions.find(reg => country.region === reg.code)
    }
  }
)
