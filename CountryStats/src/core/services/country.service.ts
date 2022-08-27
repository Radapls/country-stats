import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../constants/api.constant';


@Injectable()
export class FlagService
{
    constructor(private readonly http: HttpClient)
    { }

    public getAllCountries(): Observable<Array<string>>
    {
        return this.http.get<Array<string>>(api.all());
    }

    public getCountryNames(name: string): Observable<any>
    {
        return this.http.get(api.name(name));
    }

    public getCountryCode(code: string): Observable<any>
    {
        return this.http.get(api.name(code));
    }
}