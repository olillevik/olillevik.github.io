(() => {
    'use strict';
    
    // hjelpemetoder
    var el = id => document.getElementById(id + "");

    // modell
        var spiller = "0";
        var poengX = "0";
        var poeng0 = "0";
        var trekk = ["", "", "", "", "", "", "", "", ""];
        var vinnerkombinasjon = [];
    
    // konstanter
    const brett = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const vinnerkombinasjoner = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"]];

    var gjoerTrekk = (felt) => {
        if (ledig(felt)) {
            // Oppdater modell
            lagreTrekk(felt);
            finnVinnerkombo();
            giPoeng();
            byttSpiller();
            
            // Oppdater webside
            tegnMerke(felt);
            fargVinnerkombo();
            oppdaterPoeng();
        }           
    };

    var ledig = felt => trekk[felt] === ""; 
    
    var lagreTrekk = felt => trekk[felt] = spiller;
    
    var finnVinnerkombo = () => vinnerkombinasjoner.filter(eietAvSpiller).map(kombo => vinnerkombinasjon.push(kombo)); 
    var eietAvSpiller = kombo => kombo
        .filter(felt => trekk[felt] === spiller)
        .length === 3;
    
    var giPoeng = () => {
        if (vinnerkombinasjon.length > 0) {
            if (spiller === "X") {
                ++poengX;
            } else if (spiller === "0") {
                ++poeng0;
            }
        }
    };
    
    var byttSpiller = () => (spiller === "0") ? spiller = "X" : spiller = "0";

    var tegnMerke = felt => el(felt).innerHTML = spiller; 

    var fargVinnerkombo = () => vinnerkombinasjon.map(kombo => fargFelt(kombo));
    var fargFelt = kombo => kombo.map(felt => el(felt).style.backgroundColor = "green");

    var oppdaterPoeng = () => {
        el("spiller" + spiller).innerHTML = (poengX);
        el("spiller" + spiller).innerHTML = (++poeng0);
    };
    
    var nyttSpill = () => {
        brett.map(id => el(id).innerHTML = "&nbsp");
        brett.map(id => el(id).style.backgroundColor = "lightgray");
        trekk = ["", "", "", "", "", "", "", "", ""];
    }
    
    // hendelser
    brett.map(id => el(id).addEventListener("click", () => gjoerTrekk(id)));   
    el("nyttSpill").addEventListener("click", () => nyttSpill());

})();