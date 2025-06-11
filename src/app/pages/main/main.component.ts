import { Component } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  properties: Property[] = [
    {
      id: 1,
      title: 'Квартира в центре',
      address: 'ул. Ленина, 10',
      price: 50000,
      status: 'rented',
      endDate: new Date('2023-12-31'),
      nextPayment: new Date('2023-07-01'),
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
  ];
}

// some components and pages need to delete
