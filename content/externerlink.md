---
title: "Externerlink"
date: 2021-01-31T18:37:02+01:00
draft: false
---

 
<script>
 function onOpenClick(self) {
     const url = window.location.hash.substring(1);
     // TODO: open in new tab button
     console.log(url);
     console.log(self ? "_self" : "_blank");
     //window.location.assign(url);
     window.open(url, self ? "_self" : "_blank");
 }
</script>

Hier öffnet sich eine externe Webseite. Wenn Du das nicht möchtest, dann gehe einfach weiter. 

Wenn Du insteresse an dieser Webseite hast, dann kannst Du selbige direkt hier öffnen oder als neue Seite öffnen, ganz, wie Du möchtest.

<button type="button" onclick="onOpenClick(true)">
hier öffnen
</button>
<button type="button" onclick="onOpenClick(false)">
als neue Seite öffnen
</button>
