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