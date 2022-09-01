import { Action, ActionReducerMap } from '@ngrx/store';
import { CountryReducer } from './country/reducer.country';
import { CountryStore } from './country/store.country';

export interface AppState
{
    country: CountryStore;
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    country: CountryReducer

};
