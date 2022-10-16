import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loaCodeError, loadCode, loadCodeSuccess, loadCountries, loadCountriesError, loadCountriesSuccess, loadName, loadNameError, loadNameSuccess, loadRegion, loadRegionError, loadRegionSuccess, reloadCode, reloadName, reloadRegion } from './countries.actions';
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
    countries: action.countries,
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
    countries: action.countries,
    loading: false
  })),
  on(loadRegionError, (state, action) => ({
    ...state,
    error: action.error,
    loading: false
  })),
  on(reloadCode, (state) => ({
    ...state,
    loading: true,
    code: undefined
  })),
  on(loadCode, (state) => ({
    ...state,
    loading: true
  })),
  on(loadCodeSuccess, (state, action) => ({
    ...state,
    country: action.country,
    loading: false
  })),
  on(loaCodeError, (state, action) => ({
    ...state,
    error: action.error
  })),
);

export function CountriesReducer(
  state: Partial<CountriesStore> = initialState,
  action: Action
): Partial<CountriesStore>
{
  return reducer(state, action);
}
