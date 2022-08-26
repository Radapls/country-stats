import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        CardComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        ReactiveFormsModule
    ],
    exports: [
        CardComponent
    ]
})
export class CardModule
{ }