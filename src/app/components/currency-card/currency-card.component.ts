import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import {
  CurrencyInterface,
  CurrencyResponseInterface,
} from 'src/app/interfaces/currency.interface';

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

  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurrencies();
  }

  private updateCurrencies(data: CurrencyResponseInterface): void {
    console.log(data);
    const currencyKeys = Object.keys(data);
    for (let i = 0; i < currencyKeys.length; i++) {
      const key = currencyKeys[i];
      const currency = this.currencies[i];
      currency.price = data[key]?.ask;
      currency.pctChange = data[key]?.pctChange;
      currency.lastUpdated = data[key]?.lastUpdated;
    }
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        this.updateCurrencies(data);
        this.isLoading = false;
        const cacheData = {
          timestamp: Date.now(),
          data: data
        };
        localStorage.setItem('currencyCache', JSON.stringify(cacheData));
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = 'Algo deu errado';
      },
    });
  }

  reload() {
    this.getCurrencies();
  }
}
