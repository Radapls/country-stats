import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
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

    public sub: Subscription = new Subscription();
    public stateCtrl = new FormControl('');
    public country$!: Observable<Array<Countries>>;
    public countries!: Array<Countries>;
    public names!: string;

    constructor(
        private readonly countryServices: FlagService
    )
    { }

    public filterStates(): Countries[]
    {
        return this.countries.filter(names => names.name.map(res => res.common));
    }

    public ngOnInit(): void
    {
    };

    public ngOnDestroy(): void
    {
    }

}
