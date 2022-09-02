import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FlagService } from 'src/core/services/country.service';
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

    public countryInfo!: Observable<Countries>;

    constructor(private readonly country: FlagService)
    { }

    // public ngOnInit(): void
    // {
    //     this.country.getAllCountries().subscribe((res: any) =>
    //     {
    //         this.countryInfo = res
    //     });
    //     this.country.getCountryNames('colombia').subscribe((res: string) =>
    //     {
    //         this.name = res
    //     })
    // };
}