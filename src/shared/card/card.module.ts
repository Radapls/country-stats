import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/shared/shared.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class CardModule { }
