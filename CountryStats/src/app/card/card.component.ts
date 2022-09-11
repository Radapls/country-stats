import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CountriesApi } from 'src/core/api/countries.api';
import { Countries } from 'src/core/services/models/country.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent
{
    @Input()
    public name!: string;

    @Input()
    public title!: string;

    @Input()
    public description!: string;

    // @Input()
    // public countries!: Countries

    public countryInfo!: Observable<Array<Countries>>;

    public sub: Subscription = new Subscription();
    public countries$: Observable<Array<Countries>> = this.api.getCountries$
    public countries: Array<Countries> = []

    constructor(
        private readonly api: CountriesApi)
    { }

    public ngOnInit(): void
    {
        this.sub.add(this.countries$.subscribe((res) =>
            this.countries = res
        ));
    };


}