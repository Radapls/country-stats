import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';

interface Food
{
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit, OnDestroy
{

    public sub: Subscription = new Subscription();
    public countriesControl = new FormControl('');

    public names!: string;

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries!: Array<Countries>;

    constructor(
        private readonly api: CountriesApi
    )
    { }

    public filterCountries(): Countries[]
    {
        return this.countries.filter(names => names.name.map(res => res.common));
    }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value))
    };

    public ngOnDestroy(): void
    {
    }

}
