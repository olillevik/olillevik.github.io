# Introduksjon til JavaScript
ved _Ørjan Markhus Lillevik_

## Hvorfor JavaScript i kodeklubben?
JavaScript er det programmeringsspråket som brukes for å gi funksjonalitet i web-sider. Litt forenklet kan vi si at en webside er bygget opp av tre ting.

1. HTML - gir struktur til websiden som en knapp på en webside.
2. CSS - gir utseende til websiden som utssende på knappen.
3. JavaScript - gir funksjonalitet til websiden som hva som skjer når man trypper på knappen. 

Internett er en av de viktigste oppfinnelsene til menneskeheten. Det er i dag det viktigste mediet for å formidle kunnskap til andre.


## Hva skal vi lage
Vi skal lage spillet tripp-trapp-tresko, også kalt bondesjakk. Vi skal lære oss å legge det ut på en webside slik at spillet er tilgjengelig for hvem som helst i hele verden.

Reglene for tripp-trapp-tresko kan leses på wikipedia side [https://no.wikipedia.org/wiki/Tripp-trapp-tresko](https://no.wikipedia.org/wiki/Tripp-trapp-tresko).

## Hva trenger vi

1. Nettleseren Chrome eller Firefox.
2. Teksteditoren [Brackets.io](http://brackets.io)
3. En Github-konto [http://github.com](http://github.com)

### Bracket
For å skrive kode i HTML, CSS ellerl JavaScript trenger vi ikke noe spesielt verktøy. Men verktøy kan gjøre det lettere for oss. Vi skal bruke [brackets.io](http://brackets.io). Dette er en enkel editor som har støtte for autocomplete og syntax-highlighting. Vi skal også utvide den med tillegget beautify for å autoformatere koden vår.

### Github
* For å ta vare på koden vi skriver. 
* For å kunne komme tilbake til "der vi var" hvis vi programmerer feil. 
* For å få programmet vårt ut på internett.

Lag en konto på [http://github.com](http://github.com). Installer desktop-klienten til github på pcen din [https://desktop.github.com/](https://desktop.github.com/).

## La reisen begynne...
Vi skal nå programmere bondesjakk. Et løsningsforslag finner du på internett men det skal vi ikke bruke med mindre vi setter oss ordentlig fast og ikke kommer ut av det med egen hjelp, sidemannens hjelp eller instruktørens hjelp.

### Opprett prosjektet på github

### Lag en webside
Vi trenger en webside. Lag en fil kalt index.html i en mappe du kaller hva du vil.

```html
<!DOCTYPE html>
<html>
    <head lang="no">
        <meta charset="utf-8" />
    </head>

    <body>
    </body>
</html>
```

### Gi siden en tittel

```html
<!DOCTYPE html>
<html>
    <head lang="no">
        <meta charset="utf-8" />
        <title>Min tittel</title>
    </head>

    <body>
        <h1>En overskrift</h1>
        <p>Her kan jeg skrive et avsnitt om hva jeg måtte ønske.</p>
    </body>
</html>
```

### En ny side for bondesjakk

Opprett en fil kalt tic-tac-toe.html.

```html
<header class="flex-container">
        <a href="index.html" class="header-item">Home</a>
        <a href="tic-tac-toe.html" class="header-item">Tic-tac-toe</a>
    </header>
    <article>
        <h1>En overskrift</h1>
        <p>Her kan jeg skrive et avsnitt om hva jeg måtte ønske.</p>
    </article>
```
Men det ser jo ikke så pent ut. Vi endrer utseendet ved å legge å opprette filen _styles.css_ og legge til følgende:
```css
.flex-container {
    display: flex;
    justify-content: center;
}

.flex-container .header-item {
    font-size: 3em;
    text-align: center;
    background-color: darkgrey;
    flex: 1;
    margin: 1px;
}
```

Importer css-filen i index.html.

```html
<link rel="stylesheet" href="styles.css">
```

### La spillet begynne

Vi trenger et rutenett.

```html
<div class="flex-container">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>
    <div class="flex-container">
        <div>&nbsp;</div>
        <div>&nbsp;</div>
    </div>
```

La oss fikse på utseende før vi går videre. Åpne _styles.css_ og legg til følgende:

```css
.flex-container .flex-item {
    background-color: lightgrey;
    border: 2px solid black;
    text-align: center;
    font-size: 20vh;
}
```

Legg så til `class="flex-item"` på de fire divene som er inni flex-containere. Da ser det slik ut: 

```html
<div class="flex-container">
        <div class="flex-item">&nbsp;</div>
        <div class="flex-item">&nbsp;</div>
    </div>
    <div class="flex-container">
        <div class="flex-item">&nbsp;</div>
        <div class="flex-item">&nbsp;</div>
    </div>
```

## Programmering i JavaScript
For å lage tripp-trapp-tresko trenger vi å forstå følgende ord i programmeringssammenheng:

1. Variabel
2. Verdi
3. Funksjon

La oss forsøke å illustrere disse tre punktene gjennom et eksempel. La oss anta at Harry Potter har 1000 gullmynter på konto i Gringots og setter in 3 gullmynter.

Gjennom hele eksempelet kan du prøve koden i din egen nettleser. Åpne Chrome. Trykk F12. I Console kan du nå skrive inn kode. Hver gang du trykker _enter_ kjøres koden av nettleseren.

### Variabel
I eksempelet over kan kontoen til Harry beskrives med en variabel. La oss gi den et navn, _harrysKonto_. En variabel kan holde på en verdi eller en funksjon.

```javascript
// En variabel i JavaScript
var harrysKonto;
```

### Verdi
Variabelen _harrysKonto_ holder på verdien av de pengene han har satt inn.

```javascript
// Tilordner verdien 1000 til variabelen.
harrysKonto = 1000;
```

### Funksjoner
Hva skjer så når Harry ønsker å sette inn 3 gullmynter på kontoen sin. Da skal beløpet han har øke med tre gullmynter. Vi kan lage en funksjon for å sette inn penger på en konto.

```javascript
//beregnInnskudd er variabelen som holder funksjonen.
//konto og beløp er inn-variable (input variables).
//nyttBeløpPaaKonto er ut-variabel (output).
var beregnInnskudd = (konto, belop) => nyttBelopPaaKonto = konto + belop;

// Beregner ny verdi på kontoen og tilordner den nye verdien til variabelen konto.
harrysKonto = beregnInnskudd(harrysKonto, 3);
```

Funksjoner har ingen, en eller flere inputvariable. Dersom du ikke ønsker å ha noen inputvariabel kan du skrive det slik:

```javascript
var fly = () => "Ascendio";
fly();
```

Noen ganger trenger du mer enn en linje for å skrive funksjonen. Det kan du gjøre gjennom å putte "kroppen" av funksjonen mellom to krøllparenteser.

```javascript
var fly = () => {
    console.log("En trollmann eller trollkvinne har kastet en formel for å fly");
    return "Ascendio";
};
fly();
```

## La reisen fortsette

### La oss krydre med litt JavaScript
Vi starter med litt magi. Koden under sørger for at JavaScript-koden lastes inn når den importeres av en web-side. Opprett filen script.js og legg inn koden under.

```javascript
(() => {
    'use strict';
    //skriv koden din her
})();
```

### La oss spille...
Når vi trykker på en av rutene ønsker vi at det skal dukke opp et tegn der. Vi trenger en funksjon som tar imot hvilken rute som ble klikket på og oppdaterer innholdet i ruten.

```javascript
    window.play = (sq) => {
        sq.innerHTML = 0;
    };
```
### Kall funksjonen når du trykker i en rute
For hver av rutene våre må vi legge til _onclick=..._ og fortelle hva som skal skje.
```html
    <div class="flex-item" onclick="play(this)">&nbsp;</div>
```

Nå er det på tide å bytte spiller. Hvordan gjør vi det?

>Tips! Opprett en variabel som holder styr på hvilket merke som skal settes. Bytt mellom 0 og X avhengig av hvem som spilte sist.

### La oss fullføre rutenettet vårt

```html
<div class="flex-container">
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
    </div>
    <div class="flex-container">
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
    </div>
    <div class="flex-container">
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
        <div class="flex-item" onclick="play(this)">&nbsp;</div>
    </div>
```

### Farg vinnende kombinasjon grønn
_TODO_


    

