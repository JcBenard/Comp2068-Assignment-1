/// <reference path="lib/impress.js" />

function init() {
    console.log("Game Started");
    impress().init();
}

var sub;
function subweapon(sub) {
    this.sub = sub;
    console.log(sub);
}

function subCheck(subNeeded, goodOutcome,badOutcome, bossName) {
    if (sub == subNeeded) {
        document.getElementById(bossName).href = "#/" + goodOutcome;
    } else {
        document.getElementById(bossName).href = "#/" + badOutcome;
    }
}