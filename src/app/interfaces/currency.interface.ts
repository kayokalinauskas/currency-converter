export interface CurrencyInterface {
  title: string;
  pctChange: number;
  price: number;
  lastUpdated?: Date;
}

export interface CurrencyResponseInterface {
  [key: string]: {
    ask: number;
    pctChange: number;
    lastUpdated?: Date;
  };
}
