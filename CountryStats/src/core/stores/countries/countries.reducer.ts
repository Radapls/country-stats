import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loadCountries, loadCountriesError, loadCountriesSuccess, loadName, loadNameError, loadNameSuccess, reloadName } from './countries.actions';
import { CountriesStore } from './countries.store';

export const initialState: Partial<CountriesStore> = {
    loading: false,
    name: undefined,
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
        country: action.country,
        loading: false
    })),
    on(loadNameError, (state, action) => ({
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