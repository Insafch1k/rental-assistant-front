import { Component } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  properties: Property[] = [
    {
      id: 1,
      title: 'Квартира в центре',
      address: 'ул. Ленина, 10',
      price: 50000,
      status: 'rented',
      endDate: new Date('2025-12-31'),
      nextPayment: new Date('2025-07-01'),
    },
    {
      id: 2,
      title: 'Офисное помещение',
      address: 'пр. Мира, 25',
      price: 75000,
      status: 'available',
    },
    {
      id: 3,
      title: 'Квартира в центре',
      address: 'пр. Пушкина, 18',
      price: 45000,
      status: 'available',
    },
    {
      id: 4,
      title: 'Квартира в центре',
      address: 'ул. Ленина, 10',
      price: 55000,
      status: 'rented',
      endDate: new Date('2025-12-31'),
      nextPayment: new Date('2025-10-01'),
    },
    {
      id: 5,
      title: 'Офисное помещение',
      address: 'пр. Мира, 29',
      price: 60000,
      status: 'available',
    },
    {
      id: 6,
      title: 'Квартира в центре',
      address: 'пр. Пушкина, 19',
      price: 47000,
      status: 'available',
    },
    {
      id: 7,
      title: 'Квартира в центре',
      address: 'ул. Ленина, 10',
      price: 53000,
      status: 'rented',
      endDate: new Date('2025-12-31'),
      nextPayment: new Date('2025-11-01'),
    },
    {
      id: 8,
      title: 'Офисное помещение',
      address: 'пр. Мира, 25',
      price: 85000,
      status: 'available',
    },
    {
      id: 9,
      title: 'Квартира в центре',
      address: 'пр. Пушкина, 9',
      price: 95000,
      status: 'available',
    },
  ];
}
