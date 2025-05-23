export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  rentalPrice: number;
  rentalCompany: string;
  address: string;
  mileage: number;
}

export interface QueryValues {
  brandOption: string;
  maxMileage: string;
  minMileage: string;
  priceOption: string;
}

export interface Return {
  cars: Car[];
  page: string;
  totalCars: number;
  totalPages: number;
}
