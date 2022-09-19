import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CountriesApi } from '../api/countries.api';

@Injectable()
export class CountriesResolver implements Resolve<void>
{
    constructor(private api: CountriesApi)
    { }

    public resolve(): void
    {
        this.api.loadCountries();
    }
}