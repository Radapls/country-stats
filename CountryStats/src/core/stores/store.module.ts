import { NgModule } from '@angular/core';
import { StoreModule as NGStoreModule } from '@ngrx/store';
import { reducers } from './store';

@NgModule({
    imports: [
        NGStoreModule.forRoot(reducers)
    ]
})
export class StoreModule
{ }