import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { Countries } from 'src/core/services/models/country.model';
import { loadCountries, loading, loadNames } from './actions.country';
import { CountryStore } from './store.country';

export const initialState: Partial<CountryStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<CountryStore>, Action> = createReducer(
    initialState,
    on(loading, (state) => ({
        ...state,
        loading: true
    })),
    on(loadCountries, (state, action) => ({
        ...state,
        countries: action.countries
    })),
    on(loadNames, (state, action) => ({
        ...state,
        name: state.countries?.map((dt: Countries) =>
        {

        }),
    }))

);

export function CountryReducer(
    state: Partial<CountryStore> = initialState,
    action: Action
): Partial<CountryStore>
{
    return reducer(state, action);
}