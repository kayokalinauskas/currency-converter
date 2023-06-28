import { Component } from '@angular/core';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  bitcoinPrice: number;
  ethereumPrice: number;
  litecoinPrice: number;
  title = 'currency-converter';

  constructor() {
    // Aqui você pode fazer chamadas a uma API para obter os preços atualizados das moedas em reais brasileiros
    // Substitua os valores abaixo pelos preços reais
    this.bitcoinPrice = 50000;
    this.ethereumPrice = 3000;
    this.litecoinPrice = 150;
  }
}
