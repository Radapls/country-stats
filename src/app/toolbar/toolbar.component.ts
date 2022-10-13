import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map, Observable, startWith, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries, Regions } from 'src/core/services/models/country.model';
import { SelectModel } from 'src/core/services/models/select.model';

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
  public debounceTime: number = 1000;

  @Output()
  public search: Observable<string> = this.searchEvent.pipe(debounceTime(this.debounceTime)
  );

  @Output()
  public refresh: EventEmitter<Event> = new EventEmitter();

  @Output()
  public filter: EventEmitter<string> = new EventEmitter();

  public sub: Subscription = new Subscription();
  public control: FormGroup = new FormGroup({
    search: new FormControl(''),
    filter: new FormControl(''),
  });

  public filteredRegions$: Observable<Array<Countries>> = this.api.getRegions$;
  public filteredRegion!: string;
  public regions!: Regions

  public itemRegions: Array<SelectModel<string, Regions>> = [
    {
      key: 'Africa',
      value: Regions.africa
    },
    {
      key: 'America',
      value: Regions.america
    },
    {
      key: 'Europe',
      value: Regions.europe
    },
    {
      key: 'Asia',
      value: Regions.asia
    },
    {
      key: 'Oceania',
      value: Regions.oceania
    }
  ];

  public countries$: Observable<Array<Countries>> = this.api.getCountries$
  public countries!: Array<Countries>;

  public filteredNames$: Observable<Array<Countries>> = this.api.getName$;
  public searchContentsValue!: string;
  public isRefresh!: boolean;

  constructor(
    private readonly api: CountriesApi
  )
  {
    this.filteredNames$ = this.control.valueChanges.pipe(
      startWith(''),
      map(country => (country ? this._filterCountry(country) : this.countries.slice())),
    );
  }

  public get searchContents(): string
  {
    return this.searchContentsValue;
  }

  public get filterRegion(): Regions
  {
    return this.regions;
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

  public set filterRegion(regionSelected: Regions)
  {
    this.regions = regionSelected;
    console.log(regionSelected)
    this.filter.emit(regionSelected);
  }


  public onRefresh(): void
  {
    this.isRefresh = true;
    this.searchContents = '';
    this.refresh.emit();
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
