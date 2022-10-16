import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from './card/card.module';
import { LoadingModule } from './loading/loading.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { ToolbarModule } from './toolbar/toolbar.module';

const sharedModules = [
  CardModule,
  LoadingModule,
  SnackBarModule,
  ToolbarModule
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
