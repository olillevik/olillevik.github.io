(function () {
    'use strict';

    // hjelpemetode
    var el = function (id) {
        return document.getElementById(id + "");
    };

    // modell
    var spiller = "";
    var trekk = new Array(9);

    const brett = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

    var oppdater = function (knappTrykket) {
        console.log("Knapp trykket med id: " + knappTrykket);
        settSpiller();
        lagreTrekk(knappTrykket);
        vis();
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
        if (typeof (trekk[felt]) !== "undefined") {
            console.log("Tegner merke for felt: " + felt);
            el(felt).innerHTML = trekk[felt];
        }
    };

    // hendelser
    el(0).addEventListener("click", function () {
        oppdater(0);

    });
    el(1).addEventListener("click", function () {
        oppdater(1);
    });
    el(2).addEventListener("click", function () {
        oppdater(2);
    });
    el(3).addEventListener("click", function () {
        oppdater(3);
    });
    el(4).addEventListener("click", function () {
        oppdater(4);
    });
    el(5).addEventListener("click", function () {
        oppdater(5);
    });
    el(6).addEventListener("click", function () {
        oppdater(6);
    });
    el(7).addEventListener("click", function () {
        oppdater(7);
    });
    el(8).addEventListener("click", function () {
        oppdater(8);
    });

})();