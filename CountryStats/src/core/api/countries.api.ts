import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countries } from '../services/models/country.model';
import { loadCountries } from '../stores/country/actions.country';
import { getCountries } from '../stores/country/selectors.country.';
import { CountryStore } from '../stores/country/store.country';

@Injectable()
export class CountriesApi
{

    public getCountries$: Observable<Array<Countries>> = this.store.select(getCountries);

    constructor(
        private store: Store<CountryStore>,
        private readonly actions$: Actions
    )
    { }

    public loadCountries(): void
    {
        this.store.dispatch(loadCountries());
    }
}