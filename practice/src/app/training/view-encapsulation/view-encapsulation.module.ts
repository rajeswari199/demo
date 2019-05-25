import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewEncapsulationRoutingModule } from './view-encapsulation-routing.module';
import { ViewEncapsulationComponent } from './view-encapsulation.component';
import { ViewEncapsulationChildComponent } from './view-encapsulation-child/view-encapsulation-child.component';
import { ViewEncapsulationChild2Component } from './view-encapsulation-child2/view-encapsulation-child2.component';
import { ChildOfChild2Component } from './view-encapsulation-child2/child-of-child2/child-of-child2.component';
import { ChildOfChild1Component } from './view-encapsulation-child/child-of-child1/child-of-child1.component';

@NgModule({
  declarations: [
    ViewEncapsulationComponent,
    ViewEncapsulationChildComponent,
    ViewEncapsulationChild2Component,
    ChildOfChild2Component,
    ChildOfChild1Component
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    ViewEncapsulationRoutingModule
  ]
})
export class ViewEncapsulationModule { }
