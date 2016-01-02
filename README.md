# Introduksjon til JavaScript
_ved Ørjan Markhus Lillevik_

## Hvorfor JavaScript i kodeklubben?
Hvorfor er JavaScript verdens viktigste programmeringsspråk...

_Fortell om historien til internett_

## Hva skal vi lage
Tripp-trapp-tresko

_Diskuter reglene_

## Programmering i JavaScript
For å lage tripp-trapp-tresko trenger vi å forstå følgende ord i programmeringssammenheng:

1. Variabel
2. Verdi
3. Funksjon

La oss forsøke å illustrere disse tre punktene gjennom et eksempel. La oss anta at Harry Potter har 1000 gullmynter på konto i Gringots og setter in 3 gullmynter.

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
    var beregnInnskudd = (konto, beløp) => var nyttBeløpPaaKonto = konto + beløp;

    // Beregner ny verdi på kontoen og tilordner den nye verdien til variabelen konto.
    konto = beregnNyttBeløpPaaKonto(konto, 3);

```

Det finnes flere måter å lage funksjoner på i JavaScript. Om noen mener koden du skriver ser litt rar ut kan du svare at du bruker pilfunksjoner som ble tilgjengelige fra versjon ECMAScript6.

## HTML/CSS/JavaScript
Dette er ikke et HTML-kurs men litt trenger vi for å lage brettet. Vi skal lage en html-side med et rutenett. I rutenettet skal vi sette X eller 0 når vi spiller.

## Verktøy
### Bracket
For å skrive kode i HTML, CSS ellerl JavaScript trenger vi ikke noe spesielt verktøy. Men verktøy kan gjøre det lettere for oss. Vi skal bruke [brackets.io](http://brackets.io). Dette er en enkel editor som har støtte for autocomplete og syntax-highlighting. Vi skal også utvide den med tillegget beautify for å autoformatere koden vår.

### Github
* For å ta vare på koden vi skriver. 
* For å kunne komme tilbake til "der vi var" hvis vi programmerer feil. 
* For å få programmet vårt ut på internett.

Lag en konto på github. Installer verktøy på egen pc.
