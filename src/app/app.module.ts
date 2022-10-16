import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/core/core.module';
import { CardComponent } from 'src/shared/card/card.component';
import { LoadingComponent } from 'src/shared/loading/loading.component';
import { SharedModule } from 'src/shared/shared.module';
import { ToolbarComponent } from 'src/shared/toolbar/toolbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailModule } from './details/details.module';
import { HeaderComponent } from './header/header.component';
import { DialogComponent } from './home/dialog/dialog.component';
import { HomeModule } from './home/home.module';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ToolbarComponent,
        DialogComponent,
        LoadingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        FlexLayoutModule,
        CoreModule,
        SharedModule,
        HomeModule,
        DetailModule,
        TranslateModule.forRoot()
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
