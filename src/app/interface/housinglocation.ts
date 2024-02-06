export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

export interface Flower {
  id: number;
  name: string;
  rating: number;
  price: number;
  isTopOfTheWeek: boolean;
  image: string;
  color: string;
  origin: string;
  category: string;
}
