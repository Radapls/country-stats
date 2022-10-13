import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesStore } from './countries.store';

const getCountryState = createFeatureSelector<CountriesStore>('countries');

export const getCountriesLoading = createSelector(
  getCountryState,
  (store: CountriesStore) => store.loading
);

export const getCountries = createSelector(
  getCountryState,
  (store: CountriesStore) => store.countries
);

export const getName = createSelector(
  getCountryState,
  (store: CountriesStore) => store.countries
);

export const getRegions = createSelector(
  getCountryState,
  (store: CountriesStore) => store.countries
);
