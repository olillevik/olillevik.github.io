(function () {
    'use strict';

    // hjelpemetode
    var el = function (id) {
        return document.getElementById(id + "");
    };

    // modell
    var spiller = "";
    var poengX = "0";
    var trekk = ["", "", "", "", "", "", "", "", ""];

    var gjoerTrekk = function (felt) {
        // Oppdater modell
        settSpiller();
        lagreTrekk(felt);

        // Oppdater webside
        tegnMerke(felt);
    };

    var settSpiller = function () {
        return (spiller === "0") ? spiller = "X" : spiller = "0";
    }

    var lagreTrekk = function (felt) {
        return trekk[felt] = spiller;
    }

    var tegnMerke = function (felt) {
        el(felt).innerHTML = trekk[felt];
    };

    // hendelser
    el(0).addEventListener("click", function () {
        gjoerTrekk(0);
    });
    el(1).addEventListener("click", function () {
        gjoerTrekk(1);
    });
    el(2).addEventListener("click", function () {
        gjoerTrekk(2);
    });
    el(3).addEventListener("click", function () {
        gjoerTrekk(3);
    });
    el(4).addEventListener("click", function () {
        gjoerTrekk(4);
    });
    el(5).addEventListener("click", function () {
        gjoerTrekk(5);
    });
    el(6).addEventListener("click", function () {
        gjoerTrekk(6);
    });
    el(7).addEventListener("click", function () {
        gjoerTrekk(7);
    });
    el(8).addEventListener("click", function () {
        gjoerTrekk(8);
    });

})();