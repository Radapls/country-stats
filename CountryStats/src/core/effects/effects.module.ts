import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule as NGEffectsModule, EffectsRootModule } from '@ngrx/effects';
import { CountriesEffect } from './countries.effect';

const effects: ModuleWithProviders<EffectsRootModule> = NGEffectsModule.forRoot([
    CountriesEffect
]);

@NgModule({
    imports: [ effects ]
})
export class EffectsModule
{ }
