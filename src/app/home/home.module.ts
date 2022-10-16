import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DetailPipe } from 'src/pipes/details.pipe';
import { FormatNumberPipe } from 'src/pipes/format-number.pipe.ts.pipe';
import { LangPipe } from 'src/pipes/lang.pipe';
import { NativeNamePipe } from 'src/pipes/native-name.pipe';
import { SharedModule } from 'src/shared/shared.module';
import { DialogComponent } from './dialog/dialog.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DialogComponent,
    DetailPipe,
    LangPipe,
    NativeNamePipe,
    FormatNumberPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatIconModule,
    RouterModule
  ]
})
export class HomeModule { }
