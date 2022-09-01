import { createAction } from '@ngrx/store';
import { storeTag } from './store.country';

export const loading = createAction(
    `${storeTag} Load Countries`
);
