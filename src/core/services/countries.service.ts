import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../constants/api.constant';
import { Countries } from './models/country.model';


@Injectable()
export class CountriesService
{
    constructor(private readonly http: HttpClient)
    { }

    public getAllCountries(): Observable<Array<Countries>>
    {
        return this.http.get<Array<Countries>>(api.all());
    }

    public getCountryName(name: string): Observable<Array<Countries>>
    {
        return this.http.get<Array<Countries>>(api.name(name));
    }

    public getRegions(region: string): Observable<Array<Countries>>
    {
        return this.http.get<Array<Countries>>(api.region(region));
    }

    public getCode(code: string): Observable<Array<Countries>>
    {
        return this.http.get<Array<Countries>>(api.code(code));
    }
}
