import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FlagService } from 'src/core/services/country.service';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.scss' ]
})
export class DialogComponent implements OnInit
{
    constructor(
        private readonly dialog: MatDialog,
        private readonly country: FlagService) { }

    ngOnInit(): void
    {
    }
}
