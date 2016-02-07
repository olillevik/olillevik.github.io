(() => {
    'use strict';
    
    // hjelpemetoder
    var el = id => document.getElementById(id + "");

    // modell
    var spiller = "";
    var poengX = "0";
    var poeng0 = "0";
    var trekk = ["", "", "", "", "", "", "", "", ""];
    
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
            settSpiller();
            lagreTrekk(felt);
            giPoeng();
            
            // Oppdater webside
            tegnMerke(felt);
            fargVinnerkombo();
            oppdaterPoeng();       
        }           
    };
    
    var ledig = felt => trekk[felt] === "";
    
    var settSpiller = () => (spiller === "0") ? spiller = "X" : spiller = "0"; 
    
    var lagreTrekk = felt => trekk[felt] = spiller;
    
    var finnVinnerkombo = () => vinnerkombinasjoner.filter(kombo => eietAvSpiller(kombo));
    var eietAvSpiller = kombo => kombo
        .filter(felt => trekk[felt] === spiller)
        .length === 3;
    
    var giPoeng = () => {
        if (finnVinnerkombo().length>0) {
            if (spiller === "X") {
                ++poengX;
            } else if (spiller === "0") {
                ++poeng0;
            }
        }
    };

    var tegnMerke = felt => el(felt).innerHTML = trekk[felt]; 

    var fargVinnerkombo = () => finnVinnerkombo().map(kombo => fargFelt(kombo));
    var fargFelt = kombo => kombo.map(felt => el(felt).style.backgroundColor = "green");

    var oppdaterPoeng = () => {
        el("spillerX").innerHTML = (poengX);
        el("spiller0").innerHTML = (poeng0);
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