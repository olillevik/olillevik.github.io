(function () {
    'use strict';

    // modell
    var spiller = "";
    var poengX = "0";
    var poeng0 = "0";
    var trekk = new Array(9);

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

    var oppdater = function (knappTrykket) {
        console.log("Knapp trykket med id: " + knappTrykket);
        if ("nyttSpill" === knappTrykket) {
            trekk = new Array(9);

        } else {
            if (ledig(knappTrykket)) {
                console.log("Gjør trekk");
                settSpiller();
                lagreTrekk(knappTrykket);
                giPoeng();
            };
        }
        vis();
    };

    var vis = function () {
        tegnMerkerPaaBrettet();
        fargVinnerkombo();
        oppdaterPoeng();
    };

    var ledig = function (felt) {
        return typeof (trekk[felt]) === "undefined";
    };

    var settSpiller = function () {
        return (spiller === "0") ? spiller = "X" : spiller = "0";
    };

    var lagreTrekk = function (felt) {
        return trekk[felt] = spiller;
    };

    var finnVinnerkombo = function () {
        return vinnerkombinasjoner.filter(komboEietAvSpiller);
    };

    var komboEietAvSpiller = function (kombo) {
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

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var tegnMerkerPaaBrettet = function () {
        console.log("Tegner merker");
        brett.forEach(tegnMerke);
    };

    var tegnMerke = function (felt) {
        if (typeof (trekk[felt]) !== "undefined") {
            console.log("Tegner merke for felt: " + felt);
            el(felt).innerHTML = trekk[felt];
        } else {
            settTomtFelt(felt);
        }
    };

    var fargVinnerkombo = function () {
        finnVinnerkombo().forEach(fargKombo);
    };

    var fargKombo = function (kombo) {
        kombo.forEach(fargFelt);
    };

    var fargFelt = function (felt) {
        el(felt).style.backgroundColor = "green";
    };

    var oppdaterPoeng = function () {
        el("spillerX").innerHTML = (poengX);
        el("spiller0").innerHTML = (poeng0);
    };

    var settTomtFelt = function (id) {
        el(id).innerHTML = "&nbsp";
        el(id).style.backgroundColor = "lightgray";
    };

    // hendelser
    var leggTilLytterForFelt = function (id) {
        el(id).addEventListener("click", function () {
            oppdater(id);
        });
    };

    brett.forEach(leggTilLytterForFelt);

    el("nyttSpill").addEventListener("click", function () {
        oppdater("nyttSpill");
    });

})();