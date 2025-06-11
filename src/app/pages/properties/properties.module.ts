import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PropertiesComponent } from './properties.component';

@NgModule({
  declarations: [PropertiesComponent],
  imports: [SharedModule],
})
export class PropertiesModule {}
