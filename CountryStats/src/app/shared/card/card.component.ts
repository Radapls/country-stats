import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FlagService } from 'src/core/services/country.service';
import { Countries } from 'src/core/services/models/country.model';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit
{
    public countryInfo = []
    public name: string = "colombia";

    constructor(private readonly country: FlagService)
    { }

    @Input()
    public flag!: string;

    @Input()
    public title!: string;

    @Input()
    public description!: string;

    @Input()
    public countries!: Countries



    public ngOnInit(): void
    {
        this.country.getAllCountries([]).subscribe((res: any) =>
        {
            this.countryInfo = res
        });
        this.country.getCountryNames('colombia').subscribe((res: string) =>
        {
            this.name = res
        })
    };
}