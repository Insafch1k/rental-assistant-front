import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { PropertyEditComponent } from './pages/property-edit/property-edit.component';
import { PropertyAddComponent } from './pages/property-add/property-add.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PropertyDetailComponent,
    PropertyEditComponent,
    PropertyAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
