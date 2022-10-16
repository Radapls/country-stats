import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarComponent } from './snack-bar.component';

@NgModule({
    declarations: [
        SnackBarComponent
    ],
    imports: [
        CommonModule,
        MatSnackBarModule
    ],
    exports: [
        SnackBarComponent
    ]
})
export class SnackBarModule
{ }
