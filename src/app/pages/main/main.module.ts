import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { PropertyListComponent } from 'src/app/components/property-list/property-list.component';
import { MapComponent } from 'src/app/components/map/map.component';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';
import { PropertyCardComponent } from 'src/app/components/property-card/property-card.component';

@NgModule({
  declarations: [
    MainComponent,
    SidebarComponent,
    PropertyListComponent,
    MapComponent,
    NotificationsComponent,
    PropertyCardComponent,
  ],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
