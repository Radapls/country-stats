import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries, Flags } from 'src/core/services/models/country.model';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit
{

    public cards: Array<any> = []
    public name!: string;
    public sub: Subscription = new Subscription();

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries: Array<Countries> = []

    public flags$: Observable<Array<Flags>> = this.api.getFlags$
    public flags: Array<Flags> = []


    constructor(
        private readonly dialog: MatDialog,
        private readonly api: CountriesApi,
        private readonly viewContainerRef: ViewContainerRef
    )
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value))
    }

    public openDialog(countriesInfo: Countries): void
    {
        this.dialog.open(DialogComponent, {
            data: countriesInfo,
            viewContainerRef: this.viewContainerRef,
            height: '800px',
            width: '800px'
        });
    }
}