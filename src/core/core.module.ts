import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { EffectsModule } from './effects/effects.module';
import { ResolversModule } from './resolvers/resolver.module';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './stores/store.module';

@NgModule({
    imports: [
        ServicesModule,
        StoreModule,
        ApiModule,
        EffectsModule,
        ResolversModule
    ]
})
export class CoreModule
{ }