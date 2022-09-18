import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit
{
    public search?: string;

    public cards: Array<any> = []
    public name!: string;
    public sub: Subscription = new Subscription();

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public names$: Observable<string> = this.api.getName$
    public loading$: Observable<boolean> = this.api.loading$

    public countries: Array<Countries> = []

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
            width: '1600px',
            height: '800px'
        });
    }

    public onNameFilter(name: string): void
    {
        this.search = name;
        this.api.loadName(name)
        console.log(name)
    }
}