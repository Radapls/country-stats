import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { StoreModule } from './stores/store.module';

@NgModule({
    imports: [
        ServicesModule,
        StoreModule
    ]
})
export class CoreModule
{ }