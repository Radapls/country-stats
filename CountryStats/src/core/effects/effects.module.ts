import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { CountryEffect } from './country.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    CountryEffect
]);

@NgModule({
    imports: [ effects ]
})
export class EffectsModule
{ }
