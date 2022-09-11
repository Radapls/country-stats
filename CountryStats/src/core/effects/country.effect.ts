import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { CountryService } from '../services/country.service';
import { ErrorHandlingService } from '../services/error-handling.service';
import { loadCountries, loadCountriesError, loadCountriesSuccess } from '../stores/country/actions.country';
import { AppState } from '../stores/store';

@Injectable()
export class CountryEffect
{
    public getAllCountries$ = createEffect(() => this.actions$.pipe(
        ofType(loadCountries),
        switchMap(() =>
            this.countryService.getAllCountries()),
        map((response) => loadCountriesSuccess({
            countries: response
        })),
        this.errorHandlingService.catchError(loadCountriesError)
    ));

    constructor(
        private readonly actions$: Actions,
        private readonly countryService: CountryService,
        private readonly errorHandlingService: ErrorHandlingService,
        private readonly store$: Store<AppState>
    )
    { }
}