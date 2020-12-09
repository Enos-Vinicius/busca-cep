# BuscaCep

- Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 11.0.3.

Foram usadas as bibliotecas externas: 
  - Angular Material(https://material.angular.io/) versão 11.0.1
  - FlexLayout (https://tburleson-layouts-demos.firebaseapp.com/#/docs) 11.0.0-beta.33
- Além destas todas bibliotecas utilizadas estão no pacote do angular.

## Informações para Desenvolvedor
Passos para rodar o projeto: 
  1 - Baixar o repositório para máquina.
  2 - Como a versão usada para criação do projeto é Angular 11, é necessários estar com a versão pelo menos local do angular-cli atualizada para dar o npm install.
  3 - Após isso só rodar o projeto: ng serve

Mas para não ter o trabalho de fazer todas as configurações locais para rodar o projeto, também é possível acessar o mesmo no stackblitz, através desse link (https://stackblitz.com/github/Enos-Vinicius/busca-cep)

## DESAFIOS

O angular material quando instalado no projeto ja trás as próprias classes de coras, com isso é necessário inserir as cores do cliente seguindo os passos a seguir: 
1) Importar o angular material em uma classe apontada no angular.json setor de styles. A classe utilizada nesse projeto é a raiz mesmo: styles.css
2) No Arquivo styles.css adicionar o import do theming do angular material: @import '~@angular/material/theming';
3) Após isso é necessário fazer o include do metodo mat-core: @include mat-core(); Ele será responsável por criar variáveis do estilo necessário para customização.
4) Após isso é necessário criar uma variável que recebe varias propriedades de cores, no caso usei o site (http://mcg.mbitson.com/#!?mcgpalette0=%23d7dbdd&themename=mcgtheme) colocando a cor primary solicitada para o projeto e assim ele gera a paleta de cores que o angular material usa, após isso criei essa variável: 
$md-mcgpalette-main: (
    50 : #ede0e0,
    100 : #d1b3b3,
    200 : #b38080,
    300 : #954d4d,
    400 : #7e2626,
    500 : #670000,
    600 : #5f0000,
    700 : #540000,
    800 : #4a0000,
    900 : #390000,
    A100 : #ff6f6f,
    A200 : #ff3c3c,
    A400 : #ff0909,
    A700 : #ef0000,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #ffffff,
        400 : #ffffff,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #ffffff,
        A400 : #ffffff,
        A700 : #ffffff,
    )
);

4) Pode-se ter themas primarios e secundários nas configurações, mas optei por usar apenas essa paleta, após isso basta criar os códigos a seguir: $busca-cep-primary: mat-palette($md-mcgpalette-main);
$busca-cep-accent: mat-palette($md-mcgpalette-main);
$busca-cep-theme: mat-light-theme($busca-cep-primary, $busca-cep-accent);
@include angular-material-theme ($busca-cep-theme);

5) Assim o thema do projeto irá respeitar a paleta de cores acima, por fim é necessário verificar no angular.json se não tem um tema do angular material importado lá, para não acontecer conflitos de classes. Se tiver é preciso exclui e deixar apontando apenas para styles.css.

