import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { loading } from './actions.country';
import { CountryStore } from './store.country';

export const initialState: Partial<CountryStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<CountryStore>, Action> = createReducer(
    initialState,
    on(loading, (state) => ({
        ...state,
        loading: true
    }))
);

export function CountryReducer(
    state: Partial<CountryStore> = initialState,
    action: Action
): Partial<CountryStore>
{
    return reducer(state, action);
}