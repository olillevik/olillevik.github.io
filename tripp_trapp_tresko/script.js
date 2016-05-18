(function () {
    'use strict';

    var spiller = "";

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var oppdater = function () {
        var knappTrykket = this.id;
        console.log("Knapp " + this.id + " trykket");
        if (el(knappTrykket) !== "X" && el(knappTrykket) !== "0") {
            settSpiller();
            tegnMerke(knappTrykket);
        }
    };

    var settSpiller = function () {
        if (spiller === "0") {
            spiller = "X";
        } else {
            spiller = "0";
        }
    };

    var tegnMerke = function (felt) {
        el(felt).innerHTML = spiller;
    };

    for (var feltId = 0; feltId <= 8; feltId++) {
        el(feltId).addEventListener("click", oppdater);
    }

})();