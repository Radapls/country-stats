import { createAction, props } from '@ngrx/store';
import { ErrorPayload } from 'src/core/services/error-handling.service';
import { Countries } from 'src/core/services/models/country.model';
import { storeTag } from './countries.store';

export const loadCountries = createAction(
    `${storeTag} Load Countries`
);

export const loadCountriesSuccess = createAction(
    `${storeTag} Load Countries Success`,
    props<{
        countries: Array<Countries>;
    }>()
);

export const loadCountriesError = createAction(
    `${storeTag} Load Countries Error`,
    props<{
        error: ErrorPayload;
    }>()
);
