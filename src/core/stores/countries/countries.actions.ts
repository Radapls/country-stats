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

// Filter search by name

export const reloadName = createAction(
  `${storeTag} Load Name of Country`,
  props<{
    searchName: string;
  }>()
);

export const loadName = createAction(
  `${storeTag} Load Name of Country`,
  props<{
    searchName: string;
  }>()
);

export const loadNameSuccess = createAction(
  `${storeTag} Load Name of Country Success`,
  props<{
    countryByName: Array<Countries>;
  }>()
);

export const loadNameError = createAction(
  `${storeTag} Load Name of Country Error`,
  props<{
    error: ErrorPayload;
  }>()
);

// Filter region actions

export const reloadRegion = createAction(
  `${storeTag} Reload Regions`,
  props<{
    regionName: string;
  }>()
);

export const loadRegion = createAction(
  `${storeTag} Load Regions`,
  props<{
    regionName: string;
  }>()
);

export const loadRegionSuccess = createAction(
  `${storeTag} Load Regions Success`,
  props<{
    countriesByRegion: Array<Countries>;
  }>()
);

export const loadRegionError = createAction(
  `${storeTag} Load Regions Error`,
  props<{
    error: ErrorPayload;
  }>()
);
