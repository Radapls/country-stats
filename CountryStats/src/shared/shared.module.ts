import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SnackBarModule } from './snack-bar/snack-bar.module';

const sharedModules = [
    SnackBarModule
];
@NgModule({
    imports: [
        TranslateModule.forChild(),
        ...sharedModules
    ],
    exports: sharedModules
})
export class SharedModule
{ }