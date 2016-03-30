(function () {
    'use strict';

    var spiller = "";

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var oppdater = function (feltId) {
        if (el(feltId).innerHTML !== "X" && el(feltId).innerHTML !== "0") {
            settSpiller();
            tegnMerke(feltId)
        }
    };

    var settSpiller = function () {
        if (spiller === "0") {
            spiller = "X"
        } else {
            spiller = "0";
        }
    };

    var tegnMerke = function (felt) {
        el(felt).innerHTML = spiller;
    };

    for (let feltId = 0; feltId <= 8; feltId++) {
        el(feltId).addEventListener("click", function () {
            oppdater(feltId);
        });
    }

})();