import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { ErrorHandlingService } from '../services/error-handling.service';
import { loadCountries, loadCountriesError, loadCountriesSuccess } from '../stores/countries/countries.actions';
import { AppState } from '../stores/store';

@Injectable()
export class CountriesEffect
{
    public getAllCountries$ = createEffect(() => this.actions$.pipe(
        ofType(loadCountries),
        switchMap(() =>
            this.countriesService.getAllCountries()),
        map((response) => loadCountriesSuccess({
            countries: response
        })),
        this.errorHandlingService.catchError(loadCountriesError)
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly countriesService: CountriesService,
        private readonly errorHandlingService: ErrorHandlingService,
        private readonly store$: Store<AppState>
    )
    { }
}