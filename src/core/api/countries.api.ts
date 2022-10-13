import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countries } from '../services/models/country.model';
import { loadCountries, loadName, loadRegion } from '../stores/countries/countries.actions';
import { getCountries, getCountriesLoading, getName, getRegions } from '../stores/countries/countries.selectors';
import { CountriesStore } from '../stores/countries/countries.store';

@Injectable()
export class CountriesApi
{

    public getCountries$: Observable<Array<Countries>> = this.store.select(getCountries);
    public getName$: Observable<Array<Countries>> = this.store.select(getName)
    public getRegions$: Observable<Array<Countries>> = this.store.select(getRegions)
    public loading$: Observable<boolean> = this.store.select(getCountriesLoading);


    constructor(
        private store: Store<CountriesStore>)
    { }

    public loadCountries(): void
    {
        this.store.dispatch(loadCountries());
    }

    public loadName(searchName: string): void
    {
        this.store.dispatch(loadName({ searchName }));
    }

    public loadRegions(regionName: string): void
    {
        this.store.dispatch(loadRegion({ regionName }));
    }
}
