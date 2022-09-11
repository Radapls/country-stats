import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountryStore } from './store.country';

const getCountryState = createFeatureSelector<CountryStore>('country');

export const getCountriesLoading = createSelector(
    getCountryState,
    (store: CountryStore) => store.loading
);

export const getCountries = createSelector(
    getCountryState,
    (store: CountryStore) => store.countries
);
