import { InjectionToken } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class WuiDialogConfig<D = any> extends MatDialogConfig<D>
{ }

export type WuiDialogRef<T, R = any> = MatDialogRef<T, R>;

export const wuiDialogRefProvider = {
    provide: MatDialogRef,
    useExisting: MatDialogRef
};

export const WUI_DIALOG_DATA: InjectionToken<any> = MAT_DIALOG_DATA;
