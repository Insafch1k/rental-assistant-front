import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { PropertyListComponent } from './property-list.component';

@NgModule({
  declarations: [PropertyListComponent, PropertyCardComponent],
  imports: [CommonModule],
  exports: [PropertyListComponent],
})
export class PropertyListModule {}
