import { NgModule } from '@angular/core';
import { CountryResolver } from './country.resolver';

@NgModule({
    providers: [
        CountryResolver
    ]
})
export class ResolversModule
{ }
