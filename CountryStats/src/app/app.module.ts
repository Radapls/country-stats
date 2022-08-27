import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from 'src/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule,
        MatCommonModule,
        CommonModule,
        MatFormFieldModule,
        FlexLayoutModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
