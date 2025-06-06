export interface Property {
  id: number;
  title: string;
  address: string;
  description?: string;
  price: number;
  area?: number;
  rooms?: number;
  status: 'available' | 'rented';
  imageUrl?: string;

  // Арендованные объекты, возможно подправить, после обсуждения
  tenantId?: number;
  tenantName?: string;
  startDate?: Date;
  endDate?: Date;
  nextPayment?: Date;
}
