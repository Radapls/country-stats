import { NgModule } from '@angular/core';
import { SnackBarModule } from './snack-bar/snack-bar.module';

const sharedModules = [
    SnackBarModule
];
@NgModule({
    imports: [
        ...sharedModules
    ],
    exports: sharedModules
})
export class SharedModule
{ }
