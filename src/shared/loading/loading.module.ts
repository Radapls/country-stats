import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [ LoadingComponent ],
  imports: [ CommonModule, MatProgressSpinnerModule ],
  exports: [ LoadingComponent ],
  providers: [],
})
export class LoadingModule { }