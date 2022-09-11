import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries, Name } from 'src/core/services/models/country.model';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: [ './toolbar.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit, OnDestroy
{

    nameControl = new FormControl('');
    filteredNames: Observable<Array<Countries>>;

    public sub: Subscription = new Subscription();
    public countriesControl = new FormControl('');

    public names!: Array<Name>;

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries!: Array<Countries>;

    constructor(
        private readonly api: CountriesApi
    )
    {
        this.filteredNames = this.nameControl.valueChanges.pipe(
            startWith(''),
            map(country => (country ? this._filterCountry(country) : this.countries.slice())),
        );
    }

    // public filterCountries(): Name[]
    // {
    //     return this.countries?.map<Name>(res => res.name.filter(res => res.co));
    // }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value))
    };

    public ngOnDestroy(): void
    {
        this.sub.unsubscribe()
    }

    private _filterCountry(value: string): Countries[]
    {
        const filterValue = value;

        return this.countries?.map<Countries>(res => res);
    }

}
