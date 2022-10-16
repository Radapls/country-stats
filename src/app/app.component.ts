import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { delay, Observable, of, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';
import { DialogComponent } from './home/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy
{
  public search?: string;
  public sub: Subscription = new Subscription();

  public countries$: Observable<Array<Countries>> = this.api.getCountries$;
  public searchName$: Observable<Array<Countries>> = this.api.getName$;
  public loading$: Observable<boolean> = this.api.loading$;

  public countries: Array<Countries> = [];
  public searchResults!: Array<Countries>;

  constructor(
    private readonly dialog: MatDialog,
    private readonly api: CountriesApi,
    private readonly viewContainerRef: ViewContainerRef
  )
  { }
  public ngOnInit(): void
  {
    this.sub.add(this.countries$.subscribe((value) =>
      this.countries = value))
    this.sub.add(this.searchName$.subscribe((value) =>
      this.searchResults = value))
  }

  ngOnDestroy(): void
  {
    this.sub.unsubscribe();
  }

  public openDialog(countriesInfo: Countries): void
  {
    this.dialog.open(DialogComponent, {
      data: countriesInfo,
      viewContainerRef: this.viewContainerRef,
      maxWidth: '800px',
      maxHeight: '800px'
    });
  }

  public onNameFilter(name: string)
  {
    this.search = name;
    this.api.loadName(name);

    of(this.countries = this.searchResults).pipe(
      delay(2000))
  }

  public onRegionFilter(region: string)
  {
    this.search = region;
    this.api.loadRegions(region);
  }
}
