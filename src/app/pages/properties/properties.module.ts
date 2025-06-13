import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PropertiesComponent } from './properties.component';
import { CommonModule } from '@angular/common';
import { PropertiesRoutingModule } from './properties-routing.module';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, SharedModule, PropertiesRoutingModule],
})
export class PropertiesModule {}
