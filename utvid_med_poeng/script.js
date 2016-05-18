(function () {
    'use strict';

    // modell
    var spillersTur = "0";
    var poengX = "0";
    var poeng0 = "0";
    var trekk = new Array(9);

    var vinnerkombinasjoner = [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"]];

    var oppdater = function () {
        var knappTrykket = this.id;
        console.log("Knapp trykket med id: " + knappTrykket);
        if ("nyttSpill" === knappTrykket) {
            trekk = new Array(9);

        } else {
            if (trekk[knappTrykket] !== "X" && trekk[knappTrykket] !== "0") {
                console.log("Gjør trekk");
                nesteSpiller();
                lagreTrekk(knappTrykket);
                giPoeng();
            }
        }
        vis();
    };

    var vis = function () {
        tegnMerkerPaaBrettet();
        fargVinnerkombo();
        oppdaterPoeng();
    };

    var nesteSpiller = function () {
        console.log("Setter spiller");
        if (spillersTur === "0") {
            spillersTur = "X";
        } else {
            spillersTur = "0";
        }
    };

    var lagreTrekk = function (felt) {
        trekk[felt] = spillersTur;
    };

    var finnVinnerkombo = function () {
        return vinnerkombinasjoner.filter(komboEietAvSpiller);
    };

    var komboEietAvSpiller = function (kombo) {
        return kombo.filter(feltEietAvSpiller).length === 3;
    };

    var feltEietAvSpiller = function (feltId) {
        return trekk[feltId] === spillersTur;
    };

    var giPoeng = function () {
        if (finnVinnerkombo().length > 0) {
            if (spillersTur === "X") {
                ++poengX;
            } else if (spillersTur === "0") {
                ++poeng0;
            }
        }
    };

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var tegnMerkerPaaBrettet = function () {
        console.log("Tegner merker");
        for (var feltId = 0; feltId <= 8; feltId++) {
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
    for (var feltId = 0; feltId <= 8; feltId++) {
        el(feltId).addEventListener("click", oppdater);
    }

    el("nyttSpill").addEventListener("click", oppdater);

})();