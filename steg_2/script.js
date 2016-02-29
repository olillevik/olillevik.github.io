(function () {
    'use strict';

    // hjelpemetode
    var el = function (id) {
        return document.getElementById(id + "");
    };

    // modell
    var spiller = "";
    var trekk = ["", "", "", "", "", "", "", "", ""];
    
    const brett = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    var oppdaterModell = function (knappTrykket) {
        console.log("Knapp trykket med id: " + knappTrykket);
        settSpiller();
        lagreTrekk(knappTrykket);
    };

    var vis = function () {
        tegnMerkerPaaBrettet();
    };

    var settSpiller = function () {
        return (spiller === "0") ? spiller = "X" : spiller = "0";
    }

    var lagreTrekk = function (felt) {
        return trekk[felt] = spiller;
    }

    var tegnMerkerPaaBrettet = function () {
        console.log("Tegner merker");
        brett.map(tegnMerke);
    };

    var tegnMerke = function (felt) {
        if (trekk[felt] !== "") {
            console.log("Tegner merke for felt: " + felt);
            el(felt).innerHTML = trekk[felt];
        }
    };

    // hendelser
    el(0).addEventListener("click", function () {
        oppdaterModell(0);
        vis();
    });
    el(1).addEventListener("click", function () {
        oppdaterModell(1);
        vis();
    });
    el(2).addEventListener("click", function () {
        oppdaterModell(2);
        vis();
    });
    el(3).addEventListener("click", function () {
        oppdaterModell(3);
        vis();
    });
    el(4).addEventListener("click", function () {
        oppdaterModell(4);
        vis();
    });
    el(5).addEventListener("click", function () {
        oppdaterModell(5);
        vis();
    });
    el(6).addEventListener("click", function () {
        oppdaterModell(6);
        vis();
    });
    el(7).addEventListener("click", function () {
        oppdaterModell(7);
        vis();
    });
    el(8).addEventListener("click", function () {
        oppdaterModell(8);
        vis();
    });

})();