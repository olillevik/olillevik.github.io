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

Alt vi trenger er en nettleser. Oppgaven er utviklet med Chrome og denne nettleseren foretrekkes

Installer [Chrome](https://www.google.com/chrome/browser/desktop/index.html) hvis du ikke har det på pcen.

## La reisen begynne...
Vi skal nå programmere bondesjakk. Et løsningsforslag finner du på internett men det skal vi ikke bruke med mindre vi setter oss ordentlig fast og ikke kommer ut av det med egen hjelp, sidemannens hjelp eller instruktørens hjelp.

Det er opprettet et [startpunkt her](https://github.com/olillevik/olillevik.github.io/tree/master/startpunkt). 

>Tips til instrukturen: Gjør klar startpunktet i [JSBin](http://jsbin.com). La barna kopiere lenken slik at alle starter likt. Demonstrer deretter gjennom det verktøyet. Startpunkt kan klones herfra: http://jsbin.com/matip/18/

## Programmering i JavaScript
For å lage tripp-trapp-tresko trenger vi å forstå følgende ord i programmeringssammenheng:

1. Variabel
2. Verdi
3. Funksjon

La oss forsøke å illustrere disse tre punktene gjennom et eksempel. La oss anta at Harry Potter har 1000 gullmynter på konto i Gringots og setter in 3 gullmynter.

Gjennom hele eksempelet kan du prøve koden i din egen nettleser. Åpne Chrome. Trykk F12. I Console kan du nå skrive inn kode. Hver gang du trykker _enter_ kjøres koden av nettleseren.

### Variabel
I eksempelet over kan kontoen til Harry beskrives med en variabel. La oss gi den et navn, _harrysKonto_. En variabel kan holde på en verdi eller en funksjon.

Gjennom eksemplene kan vi bruke http://jsbin.com. Huk av for console og trykk på HTML-, CSS- og Output-fanen for å skjule dem.

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

## La reisen fortsette og spillet begynne

Når vi trykker på en av rutene ønsker vi at det skal dukke opp et tegn der. 

>Tips 1: Opprett en variabel som holder styr på hvilket merke som skal settes. Bytt mellom 0 og X avhengig av hvem som spilte sist.

>Tips 2: Sett riktig spiller ved starten på hver runde.

Herfra og ut må du bruke kildekoden til å hjelpe deg når du trenger implementasjonstips. Du har ikke lagret trekket og oppdatert visningen. Lykke til med det.
    
## Gi poeng når en spiller vinner

Du finner et startpunkt her: http://jsbin.com/matip/19  /. Herfra er du uten annen støtte enn det du finner i koden. Lykke til!