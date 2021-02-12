'use strict';

function onButtonOpenClick(self) {
    const url = window.location.hash.substring(1);
    // TODO: open in new tab button
    console.log(url);
    console.log(self ? "_blank" : "_self");
    //window.location.assign(url);
    window.open(url, self ? "_blank" : "_self");
}

var oldWindowLoad = window.onload;
function updateSpanLink() {
    const url = window.location.hash.substring(1);
    var element = document.getElementById("externerLink");
    element.textContent = url;
    element.href = url;
    if (oldWindowLoad !== null) {
        oldWindowLoad();
    }
}

window.onload = updateSpanLink;

window.onhashchange = updateSpanLink;
