(() => {
    'use strict';
    
    // hjelpemetoder
    var el = id => document.getElementById(id + "");

    // modell
    var spiller = "0";
    var trekk = ["", "", "", "", "", "", "", "", ""];
    
    // konstanter
    const brett = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    
    var gjoerTrekk = (felt) => {
        // Oppdater modell
        lagreTrekk(felt);
        byttSpiller();
            
        // Oppdater webside
        tegnMerke(felt);
    };           
    
    var lagreTrekk = felt => trekk[felt] = spiller;
    
    var byttSpiller = () => (spiller === "0") ? spiller = "X" : spiller = "0";

    var tegnMerke = felt => el(felt).innerHTML = trekk[felt]; 
    
    // hendelser"
    brett.map(id => el(id).addEventListener("click", () => gjoerTrekk(id)));   

})();