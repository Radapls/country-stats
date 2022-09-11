import { createAction, props } from '@ngrx/store';
import { Countries, Name } from 'src/core/services/models/country.model';
import { storeTag } from './store.country';

export const loading = createAction(
    `${storeTag} Loading`
);

export const loadCountries = createAction(
    `${storeTag} Load Countries Success`,
    props<{
        countries: Array<Countries>;
    }>()
);

export const loadNames = createAction(
    `${storeTag} Load Names`,
    props<{
        names: Array<Name>;
    }>()
);
