import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { CountryStore } from '../stores/country/store.country';

@Injectable()
export class CountriesApi
{
    constructor(
        private store: Store<CountryStore>,
        private readonly actions$: Actions
    )
    { }
}