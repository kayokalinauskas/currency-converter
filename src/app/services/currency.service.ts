import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface CurrencyData {
  ask: number;
  pctChange: number;
  lastUpdated: Date;
}

interface CurrencyResponse {
  [key: string]: CurrencyData;
}

interface Currencies {
  [key: string]: CurrencyData;
}

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<Currencies> {
    return this.http
      .get<CurrencyResponse>(
        'https://economia.awesomeapi.com.br/last/CAD-BRL,ARS-BRL,GBP-BRL'
      )
      .pipe(
        map((response) => this.mapCurrencies(response)),
        catchError((error) => this.handleError(error)) // Capturar e tratar erros
      );
  }

  private mapCurrencies(response: CurrencyResponse): Currencies {
    const currencies: Currencies = {};

    for (const key in response) {
      if (response.hasOwnProperty(key)) {
        const currencyKey = key.replace('BRL', '');
        currencies[currencyKey] = {
          ask: response[key].ask,
          pctChange: response[key].pctChange,
          lastUpdated: new Date(),
        };
      }
    }

    return currencies;
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro na requisição:', error);
    return throwError(
      'Erro na requisição. Por favor, tente novamente mais tarde.'
    );
  }
}
