import { createAction } from '@ngrx/store';
import { storeTag } from './store.coutry';

export const loading = createAction(
    `${storeTag} Load Countries`
);
