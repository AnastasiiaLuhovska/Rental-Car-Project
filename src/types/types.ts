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
  rentalConditions: string[];
  description: string;
  accessories: string[];
  engineSize: string;
  fuelConsumption: string;
  functionalities: string[];
}

export interface QueryValues {
  brandOption: string;
  maxMileage: string;
  minMileage: string;
  priceOption: string;
  [key: string]: string;
}

export interface Return {
  cars: Car[];
  page: string;
  totalCars: number;
  totalPages: number;
}

export interface BookingFormValues {
  name: string;
  email: string;
  date: string;
  comment: string;
}

export interface DescriptionProps {
  state: {};
}
