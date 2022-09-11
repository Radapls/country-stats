import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarService } from 'src/shared/snack-bar/snack-bar.service';
import { CountriesService } from './countries.service';
import { ErrorHandlingService } from './error-handling.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        CountriesService,
        ErrorHandlingService,
        SnackBarService,
        TranslateService
    ]
})
export class ServicesModule
{ }