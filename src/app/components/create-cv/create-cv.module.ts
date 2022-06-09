import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCvRoutingModule } from './create-cv-routing.module';
import { CreateCvComponent } from './create-cv.component';


@NgModule({
  declarations: [
    CreateCvComponent
  ],
  imports: [
    CommonModule,
    CreateCvRoutingModule
  ]
})
export class CreateCvModule { }
