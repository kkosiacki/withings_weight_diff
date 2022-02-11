import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule,MatProgressBarModule,MatListModule,MatCardModule,MatToolbarModule],
  exports: [MatButtonModule,MatProgressBarModule,MatListModule,MatCardModule,MatToolbarModule]

})
export class AppMaterialModule { }
