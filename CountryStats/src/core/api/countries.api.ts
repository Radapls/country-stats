import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countries } from '../services/models/country.model';
import { loadCountries, loadName } from '../stores/countries/countries.actions';
import { getCountries, getCountriesLoading, getName } from '../stores/countries/countries.selectors';
import { CountriesStore } from '../stores/countries/countries.store';

@Injectable()
export class CountriesApi
{

    public getCountries$: Observable<Array<Countries>> = this.store.select(getCountries);
    public getName$: Observable<string> = this.store.select(getName)
    public loading$: Observable<boolean> = this.store.select(getCountriesLoading);


    constructor(
        private store: Store<CountriesStore>)
    { }

    public loadCountries(): void
    {
        this.store.dispatch(loadCountries());
    }

    public loadName(name: string): void
    {
        this.store.dispatch(loadName({ name }));
    }
}