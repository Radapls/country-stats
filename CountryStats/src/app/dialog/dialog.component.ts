import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: [ './dialog.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit
{
    constructor(
        private readonly dialog: MatDialog)
    { }

    ngOnInit(): void
    {
    }
}
