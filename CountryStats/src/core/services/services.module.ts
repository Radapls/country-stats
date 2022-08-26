import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlagService } from './country.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        FlagService
    ]
})
export class ServicesModule
{ }