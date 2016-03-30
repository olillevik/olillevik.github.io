(function () {
    'use strict';

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var spiller = "";

    var oppdater = function (felt) {
        settSpiller();
        tegnMerke(felt)
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