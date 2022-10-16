import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  declarations: [ ToolbarComponent ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatCommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ ToolbarComponent ],
  providers: [],
})
export class ToolbarModule { }
