export interface Price {
  popular?: true;
  title: string;
  price: string;
  oldPrice: string;
  monthPrice: string;
}

export interface Service {
  prices: Price[];
}

export interface Services {
  [key: string]: Service
}
