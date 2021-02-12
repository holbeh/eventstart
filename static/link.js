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
function updateContent() {
    document.getElementById("button_self").onclick= function () { onButtonOpenClick(false) };
    document.getElementById("button_blank").onclick= function () { onButtonOpenClick(true) };

    const params = new URLSearchParams(location.search)
    if (params.get("button_blank") == "0") {
        document.getElementById("button_blank").style.display = "none";
    }
    if (params.get("button_self") == "0") {
        document.getElementById("button_self").style.display = "none";
    }

    const url = window.location.hash.substring(1);
    var element = document.getElementById("externerLink");
    element.textContent = url;
    element.href = url;
    if (oldWindowLoad !== null) {
        oldWindowLoad();
    }
}

window.onload = updateContent;

window.onhashchange = updateContent;
