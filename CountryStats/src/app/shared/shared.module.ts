import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from './card/card.module';

const sharedModules = [
    CardModule
];

@NgModule({
    imports: [
        TranslateModule,
        ...sharedModules
    ],
    exports: sharedModules
})
export class SharedModule
{ }