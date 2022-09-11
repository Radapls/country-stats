import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesError, loadCountriesSuccess } from './actions.country';
import { CountryStore } from './store.country';

export const initialState: Partial<CountryStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<CountryStore>, Action> = createReducer(
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
    }))
);

export function CountryReducer(
    state: Partial<CountryStore> = initialState,
    action: Action
): Partial<CountryStore>
{
    return reducer(state, action);
}