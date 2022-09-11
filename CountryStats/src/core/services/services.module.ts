import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CountryService } from './country.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CountryService
    ]
})
export class ServicesModule
{ }