import { Injectable } from '@angular/core';

import { CountriesApi } from '../api/countries.api';

@Injectable()
export class CountriesResolver 
{
    constructor(private api: CountriesApi)
    { }

    public resolve(): void
    {
        this.api.loadCountries();
    }
}