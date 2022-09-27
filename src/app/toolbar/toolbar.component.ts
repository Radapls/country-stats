import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, startWith, Subscription } from 'rxjs';
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
    private searchEvent: EventEmitter<string> = new EventEmitter();

    @Input()
    public debounceTime: number = 2000;

    @Output()
    public search: Observable<string> = this.searchEvent.pipe(
        debounceTime(this.debounceTime)
    );

    @Output()
    public refresh: EventEmitter<Event> = new EventEmitter();

    public regions: Array<string> = [ 'Africa', 'America', 'Asia', 'Europa', 'Oceania' ]
    public nameControl = new FormControl('');
    public filteredNames: Observable<Array<Countries>>;

    public sub: Subscription = new Subscription();
    public countriesControl = new FormControl('');

    public names!: Array<Name>;

    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries!: Array<Countries>;

    public searchContentsValue!: string;
    public isRefresh!: boolean;

    public get searchContents(): string
    {
        return this.searchContentsValue;
    }

    public set searchContents(search: string)
    {
        this.searchContentsValue = search;
        if (!this.isRefresh)
        {
            this.searchEvent.emit(search);
        }
        this.isRefresh = false;
    }

    public onRefresh(): void
    {
        this.isRefresh = true;
        this.searchContents = '';
        this.refresh.emit();
    }


    constructor(
        private readonly api: CountriesApi
    )
    {
        this.filteredNames = this.nameControl.valueChanges.pipe(
            startWith(''),
            map(country => (country ? this._filterCountry(country) : this.countries.slice())),
        );
    }

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
