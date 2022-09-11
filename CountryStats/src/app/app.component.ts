import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
    public blue!: string;
    public sub: Subscription = new Subscription();

    public world: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag-map_of_the_world_%282018%29.png/800px-Flag-map_of_the_world_%282018%29.png?20220620061653'

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries: Array<Countries> = []

    public flags$: Observable<Array<Flags>> = this.api.getFlags$
    public flags: Array<Flags> = []


    constructor(
        private readonly dialog: MatDialog,
        private readonly api: CountriesApi
    )
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value))
    }

    public openDialog(): void
    {
        const dialogRef = this.dialog.open(DialogComponent, {
            height: '800px',
            width: '800px'
        });

        dialogRef.close();
    }
}