import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { SnackBarComponent } from './snack-bar.component';

@Injectable()
export class SnackBarService
{
    constructor(
        private readonly snackBar: MatSnackBar,
        private readonly translateService: TranslateService
    )
    { }

    /**
     * Open a snackbar in the screen.
     *
     * @param message The message to show
     * @param [time] Optional time to hide
     * @param [typeClass] Optional style
     */
    public open(message: string, duration: number = 5000, typeClass: string = 'default'): void
    {

        this.snackBar.openFromComponent(SnackBarComponent, {
            data: {
                message: this.translateService.instant(message),
                typeClass
            },
            duration
        });
    }
}
