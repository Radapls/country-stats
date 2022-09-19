import { Injectable, InjectionToken } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Configuration for opening a modal dialog with the WuiDialog service.
 */
export class WuiDialogConfig<D = any> extends MatDialogConfig<D>
{ }

/**
 * Reference to a dialog opened via the WuiDialog service.
 */
@Injectable()
export class WuiDialogRef<T, R = any> extends MatDialogRef<T, R>
{ }

/**
 * Setup the provider to use the WuiDialogRef wrapper.
 */
export const wuiDialogRefProvider = {
    provide: WuiDialogRef,
    useExisting: MatDialogRef
};

/**
 * Injection token that gets the dialog data.
 */
export const WUI_DIALOG_DATA: InjectionToken<any> = MAT_DIALOG_DATA;