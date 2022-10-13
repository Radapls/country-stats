import { Injectable, InjectionToken } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class WuiDialogConfig<D = any> extends MatDialogConfig<D>
{ }

@Injectable()
export class WuiDialogRef<T, R = any> extends MatDialogRef<T, R>
{ }

export const wuiDialogRefProvider = {
    provide: WuiDialogRef,
    useExisting: MatDialogRef
};

export const WUI_DIALOG_DATA: InjectionToken<any> = MAT_DIALOG_DATA;
