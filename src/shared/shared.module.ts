import { NgModule } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from './loading/loading.module';
import { SnackBarModule } from './snack-bar/snack-bar.module';
import { ToolbarModule } from './toolbar/toolbar.module';

const sharedModules = [
    SnackBarModule,
    LoadingModule,
    ToolbarModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatCommonModule,
    MatProgressSpinnerModule,
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
