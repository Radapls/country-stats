import { NgModule } from '@angular/core';
import { CountriesResolver } from './countries.resolver';

@NgModule({
    providers: [
        CountriesResolver
    ]
})
export class ResolversModule
{ }
