# Currency Converter

<p>Este é um projeto em Angular que implementa um conversor de Dolares Canadenses, Peso Argentino e Libras Esterlinas em Real, os dados são atualizados a cada 3 minutos e armazenados em cache.</p>
<p>O aplicativo trás o valor das moedas em relação ao real, a variação em porcentagem e a hora da atualização.</p>

<p>Demo: https://kayokalinauskas.github.io/currency-converter/</p>

![alt text](https://i.imgur.com/ApMkMDJ.png)

## :heavy_check_mark: Requisitos Atendidos

- :white_check_mark: Mostra a quantia equivalente de uma unidade das moedas Dólar Canadense (CAD), Peso Argentino (ARS) e Libra Esterlina (GBP) em Real Brasileiro (BRL).

- :white_check_mark: Exibe a variação em porcentagem.

- :white_check_mark: Exibe a hora da atualização.

- :white_check_mark: Valores menores ou iguais a R$1,00 são exibidos em vermelho.
  
- :white_check_mark: Valores maiores que R$1,00 e menores ou iguais a R$5,00 são exibidos em verde.

- :white_check_mark: Valores maiores que R$5,00 são exibidos em azul.

- :white_check_mark: As informações são cacheadas no front-end por 3 minutos.

- :white_check_mark: As informações são atualizadas automaticamente a cada 3 minutos.

- :white_check_mark: O header da aplicação permanece fixo no topo, mesmo ao rolar a página.

- :white_check_mark: Responsividade.

## :clipboard: Instruções de Uso

Siga as instruções abaixo para configurar e executar o projeto em sua máquina local.

### :computer: Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 18.12 ou superior)
- Angular CLI (versão 16.1.1 ou superior)

### :arrow_down: Passo 1: Clonar o repositório

Clone este repositório para o diretório de sua escolha em seu sistema local:

```bash
git clone https://github.com/seu-usuario/currency-converter.git
```

### :wrench: Passo 2: Instalar as dependências

Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:

```bash
cd currency-converter
npm install
```

### :rocket: Passo 3: Executar o aplicativo

No diretório do projeto, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Após o build ser concluído, você poderá acessar o aplicativo em seu navegador através do endereço `http://localhost:4200/`.

## :page_with_curl: Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
