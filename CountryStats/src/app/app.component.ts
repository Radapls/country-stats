import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit
{
    title = 'Country Stats';
    public cards: Array<any> = []
    constructor()
    { }

    public ngOnInit(): void
    {
        this.cards = [
            {
                image: 'https://flagcdn.com/w320/co.png',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/co.png',
                title: 'Colombia',
                description: 'Check'
            },
            {
                image: 'https://flagcdn.com/w320/co.png',
                title: 'Colombia',
                description: 'Check'
            }
        ]
    }
}