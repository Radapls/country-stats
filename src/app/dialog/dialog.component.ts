import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';
import { WUI_DIALOG_DATA } from 'src/core/services/models/dialog.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.Emulated
})
export class DialogComponent implements OnInit, OnDestroy
{
    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public loading$: Observable<boolean> = this.api.loading$
    public sub: Subscription = new Subscription();
    public countries: Array<Countries> = []

    constructor
        (
            private readonly api: CountriesApi,
            @Inject(WUI_DIALOG_DATA) public data: Countries,
            private readonly dialog: MatDialog,
            private readonly viewContainerRef: ViewContainerRef
        )
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value));
    }

    public ngOnDestroy(): void
    {
        this.sub.unsubscribe();
    }

    public openDialog(countriesInfo: Countries): void
    {
      this.dialog.open(DialogComponent, {
        data: countriesInfo,
        viewContainerRef: this.viewContainerRef,
        maxWidth: '800px',
        maxHeight: '800px'
      });
    }

}
