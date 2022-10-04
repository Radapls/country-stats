import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';
import { Observable, Subscription } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageComponent implements OnInit, OnDestroy
{
    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public loading$: Observable<boolean> = this.api.loading$
    public sub: Subscription = new Subscription();
    public countries: Array<Countries> = []

    constructor
        (
            private readonly api: CountriesApi,
            @Inject(WUI_DIALOG_DATA) public data: Countries
        )
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((value) =>
            this.countries = value));
    }

    public ngOnDestroy(): void
    {
        this.sub.unsubscribe();
    }

}
