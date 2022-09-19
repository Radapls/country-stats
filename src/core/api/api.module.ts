import { NgModule } from '@angular/core';
import { CountriesApi } from './countries.api';

@NgModule({
    providers: [
        CountriesApi
    ]
})
export class ApiModule
{ }