import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesError, loadCountriesSuccess, loadName, loadNameError, loadNameSuccess, loadRegion, loadRegionError, loadRegionSuccess, reloadName, reloadRegion } from './countries.actions';
import { CountriesStore } from './countries.store';

export const initialState: Partial<CountriesStore> = {
  loading: false,
  countries: []
};

const reducer: ActionReducer<Partial<CountriesStore>, Action> = createReducer(
  initialState,
  on(loadCountries, (state) => ({
    ...state,
    loading: true
  })),
  on(loadCountriesSuccess, (state, action) => ({
    ...state,
    countries: action.countries,
    loading: false
  })),
  on(loadCountriesError, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  })),
  on(reloadName, (state) => ({
    ...state,
    loading: true,
    name: undefined
  })),
  on(loadName, (state) => ({
    ...state,
    loading: true
  })),
  on(loadNameSuccess, (state, action) => ({
    ...state,
    countryByName: action.countryByName,
    loading: false
  })),
  on(loadNameError, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  })),
  on(reloadRegion, (state) => ({
    ...state,
    loading: true,
    regionName: undefined
  })),
  on(loadRegion, (state) => ({
    ...state,
    loading: true
  })),
  on(loadRegionSuccess, (state, action) => ({
    ...state,
    countriesByRegion: action.countriesByRegion,
    loading: false
  })),
  on(loadRegionError, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  }))
);

export function CountriesReducer(
  state: Partial<CountriesStore> = initialState,
  action: Action
): Partial<CountriesStore>
{
  return reducer(state, action);
}
