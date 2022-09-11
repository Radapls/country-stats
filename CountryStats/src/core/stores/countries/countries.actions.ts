import { createAction, props } from '@ngrx/store';
import { ErrorPayload } from 'src/core/services/error-handling.service';
import { Countries, Flags } from 'src/core/services/models/country.model';
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

export const loadFlags = createAction(
    `${storeTag} Load Flags`
);

export const loadFlagsSuccess = createAction(
    `${storeTag} Load Flags Success`,
    props<{
        flags: string;
    }>()
);

export const loadFlagsError = createAction(
    `${storeTag} Load Flags Error`,
    props<{
        error: ErrorPayload;
    }>()
);

export const flags = createAction(
    `${storeTag} Flags`,
    props<{
        onlyFlags: Flags;
    }>()
);
