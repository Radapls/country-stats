import { ChangeDetectionStrategy, Component, Inject, OnInit, ViewContainerRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';
import { WUI_DIALOG_DATA } from 'src/core/services/models/dialog.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit
{
    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public loading$: Observable<boolean> = this.api.loading$
    public sub: Subscription = new Subscription();
    public countries: Array<Countries> = []


    constructor
        (
            private readonly api: CountriesApi,
            @Inject(WUI_DIALOG_DATA) public data: Countries,
            private readonly viewContainerRef: ViewContainerRef

        )
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value))
    }
}
