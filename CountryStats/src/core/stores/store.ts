import { Action, ActionReducerMap } from '@ngrx/store';
import { CountryReducer } from './country/reducer.coutry';
import { CountryStore } from './country/store.coutry';

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
