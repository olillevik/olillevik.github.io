(function () {
    'use strict';

    // modell
    var spiller = "";
    var poengX = "0";
    var poeng0 = "0";
    var trekk = new Array(9);

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
            if (trekk[knappTrykket] !== "X" && trekk[knappTrykket] !== "0") {
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

    var settSpiller = function () {
        console.log("Setter spiller");
        if (spiller === "0") {
            spiller = "X"
        } else {
            spiller = "0";
        }
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

    var feltEietAvSpiller = function (feltId) {
        return trekk[feltId] === spiller;
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
        for (let feltId = 0; feltId <= 8; feltId++) {
            if (trekk[feltId] === "X" || trekk[feltId] === "0") {
                console.log("Tegner merke for felt: " + feltId);
                el(feltId).innerHTML = trekk[feltId];
            } else {
                settTomtFelt(feltId);
            }
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

    // opprett lyttere for hendelser
    for (let feltId = 0; feltId <= 8; feltId++) {
        el(feltId).addEventListener("click", function () {
            oppdater(feltId);
        });
    };

    el("nyttSpill").addEventListener("click", function () {
        oppdater("nyttSpill");
    });

})();