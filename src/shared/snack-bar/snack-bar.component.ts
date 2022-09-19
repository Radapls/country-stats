import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

const ANIM_TIMEOUT: number = 500;

export interface SnackBarData
{
    message: string;
    typeClass: string;
}

@Component({
    selector: 'app-snack-bar',
    templateUrl: './snack-bar.component.html',
    styleUrls: [ './snack-bar.component.scss' ],
    animations: [
        trigger('toggleSnack', [
            state('closed', style({
                transform: 'translate(-50%, 48px)',
                opacity: 0
            })),
            state('opened', style({
                transform: 'translate(-50%, -48px)',
                opacity: 1
            })),
            transition('closed <=> opened', animate(`${ANIM_TIMEOUT}ms ease-out`))
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnackBarComponent implements OnInit
{
    public message!: string;

    public typeClass!: string;

    constructor(
        @Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData,
        private readonly snackRef: MatSnackBarRef<SnackBarComponent>
    )
    { }

    public ngOnInit(): void
    {
        this.message = this.data.message;
        this.typeClass = this.data.typeClass;
    }

    public closeSnack(): void
    {
        this.snackRef.dismiss();
    }
}
