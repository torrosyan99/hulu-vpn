export interface Price {
  popular?: true;
  title: string;
  price: string;
  oldPrice: string;
  monthPrice: string;
}

export interface Prices {
  prices: Price[];
}

export interface Services {
  [key: string]: Prices
}
