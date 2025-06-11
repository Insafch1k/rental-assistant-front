import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PropertyCardComponent } from 'src/app/components/property-card/property-card.component';
import { PropertyListComponent } from 'src/app/components/property-list/property-list.component';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';

const components = [
  PropertyCardComponent,
  SidebarComponent,
  PropertyListComponent,
  NotificationsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, RouterModule],
  exports: [...components, RouterModule],
})
export class SharedModule {}
