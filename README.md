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

1. Nettleseren Chrome eller Firefox (fungerer ikke for Internett Explorer - mangler støtte for pilfunksjoner).
2. En teksteditor - [Brackets.io](http://brackets.io)
3. En Github-konto [http://github.com](http://github.com)

### Nettleser
Sjekk at du har nettleseren Chrome eller Firefox på pcen. Hvis du ikke har en av disse nettleserne installer [Chrome](https://www.google.com/chrome/browser/desktop/index.html).

### Bracket
For å skrive kode i HTML, CSS ellerl JavaScript trenger vi ikke noe spesielt verktøy. Men verktøy kan gjøre det lettere for oss. Vi skal bruke [brackets.io](http://brackets.io). Dette er en enkel editor som har støtte for autocomplete og syntax-highlighting. Vi skal også utvide den med tillegget beautify for å autoformatere koden vår. Installer Bracket.

### Github
* For å ta vare på koden vi skriver. 
* For å kunne komme tilbake til "der vi var" hvis vi programmerer feil. 
* For å få programmet vårt ut på internett.

>Tips! Det er viktig å huske brukernavnet og passordet. Skriv det gjerne ned på en lapp som du tar med deg på kurset hvis du synes det er vanskelig å huske.

Lag en konto på [http://github.com](http://github.com). Installer desktop-klienten til github på pcen din [https://desktop.github.com/](https://desktop.github.com/).

## La reisen begynne... steg 1 hjemmeside
Vi skal nå programmere bondesjakk. Et løsningsforslag finner du på internett men det skal vi ikke bruke med mindre vi setter oss ordentlig fast og ikke kommer ut av det med egen hjelp, sidemannens hjelp eller instruktørens hjelp.

### Opprett prosjektet på github
Det første du gjør er å opprette prosjektet på github. Navnet på prosjektet er viktig. Det må være _[ditt github brukernavn].github.io. Du kan opprette prosjektet fra Github sin desktopklient.

### Lag en webside
Vi trenger en webside. Lag en fil kalt index.html i en mappe du kaller hva du vil.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>

    <body>
    </body>
</html>
```

### Gi siden en tittel

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Min tittel</title>
    </head>

    <body>
        <h1>En overskrift</h1>
        <p>Her kan jeg skrive et avsnitt om det jeg har lyst til. Dette blir synlig for hele verden!</p>
    </body>
</html>
```

Nå er det på tide å lagre, åpne githubklienten og gjøre _commit_, _publish_ og _sync_.

### En ny side for bondesjakk - steg 2 tripp-trapp-tresko

Opprett en fil kalt tripp-trapp-tresko.html.

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Tripp-trapp-tresko</title>
    </head>

    <body>
        <header>
            <meta charset="utf-8" />
            <a href="index.html">Hjem</a>
            <a href="tic-tac-toe.html">Tripp-trapp-tresko</a>
        </header>
        <article>
            
        </article>
    </body>
</html>

```
Men det ser jo ikke så pent ut. Vi endrer utseendet ved å legge å opprette filen _styles.css_ og legge til følgende:

```css
.flex-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.flex-1 {
    flex: 1;
}

header a {
    margin: 1px;
    background-color: darkgrey;
    font-size: 3em;
    text-align: center;
    text-decoration: none;
}

```

Importer css-filen i index.html.

```html
<header>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="styles.css">
</header>
```

Legg klassene til header og linkelement.

```html
<header class="flex-box">
    <meta charset="utf-8" />
    <a href="index.html" class="link flex-1">Hjem</a>
    <a href="tripp-trapp-tresko.html" class="link flex-1">Tripp-trapp-tresko</a>
</header>
```

### La spillet begynne

Vi trenger et rutenett.

```html
<table>
    <tr>
        <td>&nbsp</td>
        <td/>
    </tr>
    <tr>
        <td>&nbsp </td>
        <td/>    
    </tr>
</table>
```

La oss fikse på utseende før vi går videre. Åpne _styles.css_ og legg til følgende:

```css
table {
    table-layout: fixed;
    border-collapse: collapse;
    background-color: lightgrey;
}

td {
    border: 3px solid black;
    min-height: 20vh;
    min-width: 20vh;
    font-size: 20vh;
    text-align: center;
}
```

Nå kan du utvide rutenettet. Du trenger 9 ruter.

## Programmering i JavaScript
For å lage tripp-trapp-tresko trenger vi å forstå følgende ord i programmeringssammenheng:

1. Variabel
2. Verdi
3. Funksjon

La oss forsøke å illustrere disse tre punktene gjennom et eksempel. La oss anta at Harry Potter har 1000 gullmynter på konto i Gringots og setter in 3 gullmynter.

Gjennom hele eksempelet kan du prøve koden i din egen nettleser. Åpne Chrome. Trykk F12. I Console kan du nå skrive inn kode. Hver gang du trykker _enter_ kjøres koden av nettleseren.

### Variabel
I eksempelet over kan kontoen til Harry beskrives med en variabel. La oss gi den et navn, _harrysKonto_. En variabel kan holde på en verdi eller en funksjon.

Gjennom eksemplene kan vi bruke siden http://repl.it og velge språket JavaScript for å demonstrere.

```javascript
// Denne linjen er ikke en del av koden fordi den står bak to skråstreker. Alt etter skråstrekene på den linjen er ikke kode.
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
var beregnInnskudd = function(konto, belop) {
    return nyttBelopPaaKonto = konto + belop;
};

// Beregner ny verdi på kontoen og tilordner den nye verdien til variabelen konto.
harrysKonto = beregnInnskudd(harrysKonto, 3);
```

Funksjoner har ingen, en eller flere inputvariable. Dersom du ikke ønsker å ha noen inputvariabel kan du skrive det slik:

```javascript
var fly = function() {
    return "Ascendio";
};

fly();
```

## La reisen fortsette

### La oss krydre med litt JavaScript
Koden under sørger for at JavaScript-koden lastes inn når den importeres av en web-side. Opprett filen script.js og legg inn koden under.

```javascript
(function () {
    'use strict';
    //skriv koden din her
}) ();
```

### La oss spille...
Når vi trykker på en av rutene ønsker vi at det skal dukke opp et tegn der. Vi trenger en funksjon som lytter etter klikk i skjermbildet. Hver gang noen klikker må man oppdatere spillet.

```javascript
    document.getElementById("0").addEventListener("click", function () {
        oppdater(0);
    });
    
    var oppdater = function(elementId) {
        // Oppdater modellen
        // Vis modellen
    }
```

### Kall funksjonen når du trykker i en rute
For hver av rutene våre må vi legge til en lyttefunksjon. Hva må du skrive da?

>Tips! Du har allerede gjort det for felt 0. Se på hva du gjorde over og forsøk å legge til til en lytter for hvert av de andre feltene - felt 1-8.

Opprett så funksjonen for å oppdatere. Begynn med å sette spiller, lagre trekket som gjøres og så oppdaterer du visningen.

```javascript
var oppdater = function (knappTrykket) {
        //settSpiller();
        //lagreTrekk(knappTrykket);
        vis();
    };

    var vis = function () {
        //tegnMerkerPaaBrettet();
    };
```

Nå er det på tide å lage innholdet i funksjonen for sette riktig spiller. Hvordan gjør vi det?

>Tips 1: Opprett en variabel som holder styr på hvilket merke som skal settes. Bytt mellom 0 og X avhengig av hvem som spilte sist.

>Tips 2: Sett riktig spiller ved starten på hver runde.

Herfra og ut må du bruke kildekoden til å hjelpe deg når du trenger implementasjonstips. Du har ikke lagret trekket og oppdatert visningen. Lykke til med det.
    
## Gi poeng når en spiller vinner - steg 3 poeng

Dette steget er ikke beskrevet. Herfra er du uten annen støtte enn det du finner i koden. Lykke til!
