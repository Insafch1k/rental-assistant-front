import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PropertyCardComponent } from './components/property-card/property-card.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { PropertyEditComponent } from './pages/property-edit/property-edit.component';
import { PropertyAddComponent } from './pages/property-add/property-add.component';
import { PropertiesModule } from './pages/properties/properties.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PropertiesComponent,
    PropertyDetailComponent,
    PropertyEditComponent,
    PropertyAddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
