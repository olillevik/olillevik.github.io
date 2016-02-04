(() => {
    'use strict';
    
    // hjelpemetoder
    var el = id => document.getElementById(id + "");

    // modell
    var spiller = "0";
    var poengX = "0";
    var poeng0 = "0"
    var trekk = [];
    
    const brett = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const vinnerkombinasjoner = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"]];

    // oppdater
    var gjoerTrekk = (felt) => {
        if (ledig(felt)) {
            tegnMerke(felt);
            lagreTrekk(felt);
            fargVinner();
            giPoeng();
            byttSpiller();
        }
    };

    var ledig = felt => trekk.filter(fylt => fylt === felt); 

    var tegnMerke = felt => el(felt).innerHTML = spiller;

    var lagreTrekk = felt => trekk[felt] = spiller;

    var fargVinner = () => vinnerkombinasjoner
        .filter(eietAvSpiller)
        .map(fargKombinasjon);

    var giPoeng = () => {
        if (vinnerkombinasjoner.filter(eietAvSpiller).length > 0) {
            if (spiller === "X") {
                poengX++;
                el("spiller" + spiller).innerHTML = (poengX);
            } else if (spiller === "0") {
                poeng0++;
                el("spiller" + spiller).innerHTML = (poeng0);
            }
        }
    };

    var eietAvSpiller = kombo => kombo
        .filter(felt => trekk[felt] === spiller)
        .length === 3;

    var fargKombinasjon = kombo => kombo.map(felt => el(felt).style.backgroundColor = "green");

    var byttSpiller = () => (spiller === "0") ? spiller = "X" : spiller = "0";
     
    var nyttSpill = () => {
        brett.map(id => el(id).innerHTML = "&nbsp");
        brett.map(id => el(id).style.backgroundColor = "lightgray");
        trekk = [];
    }
    
    // hendelser
    brett.map(id => el(id).addEventListener("click", () => gjoerTrekk(id)));    
    el("nyttSpill").addEventListener("click", () => nyttSpill());

})();