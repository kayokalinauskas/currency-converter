import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import {
  CurrencyInterface,
  CurrencyResponseInterface,
} from 'src/app/interfaces/currency.interface';

const CACHE_KEY = 'currencyCache';
const CACHE_EXPIRATION_TIME = 3 * 60 * 1000; // 3 minutos

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.sass'],
})
export class CurrencyCardComponent implements OnInit {
  currencies: CurrencyInterface[] = [
    {
      title: 'Dólar Canadense',
      pctChange: 0,
      price: 0,
    },
    {
      title: 'Peso Argentino',
      pctChange: 0,
      price: 0,
    },
    {
      title: 'Libra Esterlina',
      pctChange: 0,
      price: 0,
    },
  ];

  isLoading = true;
  errorMessage = '';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  private updateCurrencies(data: CurrencyResponseInterface): void {
    Object.keys(data).forEach((key, i) => {
      const currency = this.currencies[i];
      currency.price = data[key]?.ask;
      currency.pctChange = data[key]?.pctChange;
      currency.lastUpdated = data[key]?.lastUpdated;
    });
  }

  private setCacheData(data: CurrencyResponseInterface): void {
    const cacheData = {
      timestamp: Date.now(),
      data: data,
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  }

  private getCacheData(): CurrencyResponseInterface | null {
    const cacheDataString = localStorage.getItem(CACHE_KEY);
    if (cacheDataString) {
      const cacheData = JSON.parse(cacheDataString);
      const { timestamp, data } = cacheData;
      const currentTime = Date.now();
      if (currentTime - timestamp <= CACHE_EXPIRATION_TIME) {
        return data;
      } else {
        localStorage.removeItem(CACHE_KEY);
      }
    }
    return null;
  }

  getCurrencies(): void {
    const cachedData = this.getCacheData();
    if (cachedData) {
      this.updateCurrencies(cachedData);
      this.isLoading = false;
      this.refreshDataAfterDelay();
    } else {
      this.fetchCurrenciesFromAPI();
    }
  }

  private fetchCurrenciesFromAPI(): void {
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        this.updateCurrencies(data);
        this.isLoading = false;
        this.setCacheData(data);
        this.refreshDataAfterDelay();
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Algo deu errado';
      },
    });
  }

  private refreshDataAfterDelay(): void {
    setTimeout(() => {
      this.fetchCurrenciesFromAPI();
    }, CACHE_EXPIRATION_TIME);
  }

  reload(): void {
    this.getCurrencies();
  }
}
