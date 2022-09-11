import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { ErrorHandlingService } from '../services/error-handling.service';
import { loadCountries, loadCountriesError, loadCountriesSuccess } from '../stores/countries/countries.actions';

@Injectable()
export class CountriesEffect
{
    public getCountries$ = createEffect(() => this.actions$.pipe(
        ofType(loadCountries),
        switchMap(() =>
            this.countriesService.getAllCountries()),
        map((response) => loadCountriesSuccess({
            countries: response
        })),
        this.errorHandlingService.catchError(loadCountriesError)
    ));

    // public getFlags$ = createEffect(() => this.actions$.pipe(
    //     ofType(loadFlags),
    //     switchMap(() =>
    //         this.countriesService.getAllCountries()),
    //     map((response) => loadFlagsSuccess({
    //         flags: response.slice( dt =>
    //             {
    //                 dt.flags = flags
    //             })
    //     })),
    //     this.errorHandlingService.catchError(loadCountriesError)
    // ));

    constructor(
        private readonly actions$: Actions,
        private readonly countriesService: CountriesService,
        private readonly errorHandlingService: ErrorHandlingService
    )
    { }
}