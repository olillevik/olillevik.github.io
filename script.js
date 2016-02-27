(function () {
    'use strict';

    // hjelpemetode
    var el = function (id) {
        return document.getElementById(id + "");
    };

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

    var gjoerTrekk = function (felt) {
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

    var ledig = function (felt) {
        return trekk[felt] === "";
    }

    var settSpiller = function () {
        return (spiller === "0") ? spiller = "X" : spiller = "0";
    }

    var lagreTrekk = function (felt) {
        return trekk[felt] = spiller;
    }

    var finnVinnerkombo = function () {
        return vinnerkombinasjoner.filter(eietAvSpiller);
    };

    var eietAvSpiller = function (kombo) {
        return kombo.filter(feltEietAvSpiller).length === 3;
    };

    var feltEietAvSpiller = function (felt) {
        return trekk[felt] === spiller;
    };

    var giPoeng = function () {
        if (finnVinnerkombo().length > 0) {
            if (spiller === "X") {
                ++poengX;
            } else if (spiller === "0") {
                ++poeng0;
            }
        }
    };

    var tegnMerke = function (felt) {
        el(felt).innerHTML = trekk[felt];
    };

    var fargVinnerkombo = function () {
        finnVinnerkombo().map(function (kombo) {
            fargFelt(kombo);
        });
    };

    var fargFelt = function (kombo) {
        kombo.map(function (felt) {
            el(felt).style.backgroundColor = "green";
        });
    };

    var oppdaterPoeng = function () {
        el("spillerX").innerHTML = (poengX);
        el("spiller0").innerHTML = (poeng0);
    };

    var nyttSpill = function () {
        brett.map(function (id) {
            el(id).innerHTML = "&nbsp";
        });

        brett.map(function (id) {
            el(id).style.backgroundColor = "lightgray";
        });

        trekk = ["", "", "", "", "", "", "", "", ""];
    };

    // hendelser
    brett.map(function (id) {
        el(id).addEventListener("click", function () {
            gjoerTrekk(id);
        });
    });

    el("nyttSpill").addEventListener("click", function () {
        nyttSpill();
    });

})();