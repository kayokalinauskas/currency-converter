import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './components/currency-card/currency-card.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './components/app-header/app-header.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [AppComponent, CurrencyCardComponent, AppHeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
