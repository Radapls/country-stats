import { Action, ActionReducerMap } from '@ngrx/store';
import { CountriesReducer } from './countries/countries.reducer';
import { CountriesStore } from './countries/countries.store';

export interface AppState
{
  countries: CountriesStore;
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
  countries: CountriesReducer

};
