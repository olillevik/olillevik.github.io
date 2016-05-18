(function () {
    'use strict';

    var el = function (id) {
        return document.getElementById(id + "");
    };

    var oppdater = function () {
        var knappTrykket = this.id;
        console.log("Knapp " + this.id + " trykket");

        // sett spiller
        // tegn merke

    };

    for (var feltId = 0; feltId <= 8; feltId++) {
        el(feltId).addEventListener("click", oppdater);
    }

})();