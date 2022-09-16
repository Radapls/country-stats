import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countries, Flags } from '../services/models/country.model';
import { loadCountries } from '../stores/countries/countries.actions';
import { getCountries, getCountriesLoading, getFlags } from '../stores/countries/countries.selectors';
import { CountriesStore } from '../stores/countries/countries.store';

@Injectable()
export class CountriesApi
{

    public getCountries$: Observable<Array<Countries>> = this.store.select(getCountries);
    public getFlags$: Observable<Array<Flags>> = this.store.select(getFlags);
    public loading$: Observable<boolean> = this.store.select(getCountriesLoading);


    constructor(
        private store: Store<CountriesStore>)
    { }

    public loadCountries(): void
    {
        this.store.dispatch(loadCountries());
    }
}