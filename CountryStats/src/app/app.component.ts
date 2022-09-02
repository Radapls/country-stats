import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlagService } from 'src/core/services/country.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit
{
    public countries: Array<Array<string>> = []
    public cards: Array<any> = []
    public name!: string;
    public blue!: string

    constructor
        (public dialog: MatDialog,
            private readonly country: FlagService)
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
        this.country.getAllCountries().subscribe((res: any) =>
        {
            this.countries = res
        });
        this.country.getCountryNames('colombia').subscribe((res: string) =>
        {
            this.name = res
        })
    }

    public openDialog()
    {
        const dialogRef = this.dialog.open(DialogComponent, {
            height: '800px',
            width: '800px'
        });

        dialogRef.close();
    }
}