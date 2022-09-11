import { NgModule } from '@angular/core';
import { ApiModule } from './api/api.module';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './stores/store.module';

@NgModule({
    imports: [
        ServicesModule,
        StoreModule,
        ApiModule
    ]
})
export class CoreModule
{ }