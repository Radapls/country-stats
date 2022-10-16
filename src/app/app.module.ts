import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/core/core.module';
import { DetailPipe } from 'src/pipes/details.pipe';
import { FormatNumberPipe } from 'src/pipes/format-number.pipe.ts.pipe';
import { LangPipe } from 'src/pipes/lang.pipe';
import { NativeNamePipe } from 'src/pipes/native-name.pipe';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { PageComponent } from './page/page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CardComponent,
        ToolbarComponent,
        DialogComponent,
        LoadingComponent,
        PageComponent,
        DetailPipe,
        LangPipe,
        NativeNamePipe,
        FormatNumberPipe
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
        TranslateModule.forRoot()
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
