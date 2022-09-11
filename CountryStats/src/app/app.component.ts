import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
    public countries: Array<Countries> = []
    public cards: Array<any> = []
    public name!: string;
    public blue!: string;
    public sub: Subscription = new Subscription();


    public countries$: Observable<Array<Countries>> = this.api.getCountries$

    constructor(
        private readonly dialog: MatDialog,
        private readonly api: CountriesApi
    )
    { }

    public ngOnInit(): void
    {
        this.cards = [
            {
                image: 'https://flagcdn.com/w320/co.png',
                title: 'Colombia',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/pe.svg',
                title: 'Peru',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/br.png',
                title: 'Brazil',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/pt.png',
                title: 'Portugal',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/fi.png',
                title: 'Finland',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/cr.png',
                title: 'Costa Rica',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/jp.png',
                title: 'Japan',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/sd.png',
                title: 'Sudan',
                description: 'Check'
            }
        ];
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