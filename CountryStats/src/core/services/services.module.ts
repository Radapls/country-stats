import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'src/shared/snack-bar/snack-bar.service';
import { CountryService } from './country.service';
import { ErrorHandlingService } from './error-handling.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CountryService,
        ErrorHandlingService,
        SnackBarService,
        TranslateService
    ]
})
export class ServicesModule
{ }