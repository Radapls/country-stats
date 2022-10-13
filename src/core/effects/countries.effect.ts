import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CountriesService } from '../services/countries.service';
import { ErrorHandlingService } from '../services/error-handling.service';
import { loadCountries, loadCountriesError, loadCountriesSuccess, loadName, loadNameError, loadNameSuccess, loadRegion, loadRegionError, loadRegionSuccess, reloadName, reloadRegion } from '../stores/countries/countries.actions';

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

  public getCountryName$ = createEffect(() => this.actions$.pipe(
    ofType(loadName, reloadName),
    switchMap((action) =>
      this.countriesService.getCountryName(
        action.searchName
      )),
    map((response) => loadNameSuccess({
      countries: response
    })),
    this.errorHandlingService.catchError(loadNameError)
  ));

  public getRegions$ = createEffect(() => this.actions$.pipe(
    ofType(loadRegion, reloadRegion),
    switchMap((action) =>
      this.countriesService.getCountryName(
        action.regionName
      )),
    map((response) => loadRegionSuccess({
      countries: response
    })),
    this.errorHandlingService.catchError(loadRegionError)
  ));

  constructor(
    private readonly actions$: Actions,
    private readonly countriesService: CountriesService,
    private readonly errorHandlingService: ErrorHandlingService
  )
  { }
}
