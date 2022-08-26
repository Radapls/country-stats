import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../constants/api.constant';


@Injectable()
export class FlagService
{
    constructor(private readonly http: HttpClient)
    { }

    public getAllCountries(all: Array<string>): Observable<Array<string>>
    {
        return this.http.get<Array<string>>(baseUrl + 'all');
    }

    public getCountryNames(name: string): Observable<string>
    {
        return this.http.get<string>(baseUrl + 'name/' + 'colombia');
    }
}