import { Component, Input } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss'],
})
export class PropertyListComponent {
  // Mock objects, need to realize some normal getter
  @Input() properties: Property[] = [];
  @Input() limit: number = 0;
}
