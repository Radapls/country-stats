import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';

export interface State
{
    flag: string;
    name: string;
    population: string;
}
interface Food
{
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit, OnDestroy
{

    stateCtrl = new FormControl('');
    filteredStates: Observable<State[]>;

    states: State[] = [
        {
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
        },
        {
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
        },
        {
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
        },
        {
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
        },
    ];

    public sub: Subscription = new Subscription();
    public countriesControl = new FormControl('');

    public names!: string;

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries!: Array<Countries>;

    constructor(
        private readonly api: CountriesApi
    )
    {
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
            startWith(''),
            map(state => (state ? this._filterStates(state) : this.states.slice())),
        );
    }

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

    private _filterStates(value: string): State[]
    {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }

}
