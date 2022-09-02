import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { FlagService } from 'src/core/services/country.service';
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

    public states: string[] = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
    ];

    public sub: Subscription = new Subscription();
    public stateCtrl = new FormControl('');
    public country$!: Observable<Countries[]>;
    public countries!: Array<Countries>

    constructor
        (private readonly countryServices: FlagService)
    {
        this.country$ = this.stateCtrl.valueChanges.pipe(
            startWith(''),
            map(state => (state ? this._filterStates(state) : this.countries.slice())),
        );
    }

    private _filterStates(value: string): Countries[]
    {
        const filterValue = value.toLowerCase();

        return this.countries.filter(res => res.name.includes(filterValue));
    }

    public ngOnInit(): void
    {
        this.countryServices.getAllCountries().subscribe((response: any) =>
        {
            this.countries = response
        });
    };

    public ngOnDestroy(): void
    {
    }

}
